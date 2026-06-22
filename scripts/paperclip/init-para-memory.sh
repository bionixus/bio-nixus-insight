#!/usr/bin/env bash
# Initialize PARA memory structure for an agent

set -euo pipefail

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log() {
    echo -e "${GREEN}[PARA INIT]${NC} $*"
}

warn() {
    echo -e "${YELLOW}[WARNING]${NC} $*" >&2
}

error() {
    echo -e "${RED}[ERROR]${NC} $*" >&2
    exit 1
}

info() {
    echo -e "${BLUE}[INFO]${NC} $*"
}

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
TEMPLATE_DIR="${PROJECT_ROOT}/templates/para-memory"

# Usage
usage() {
    cat <<EOF
Usage: $(basename "$0") [OPTIONS] <agent-name-or-id>

Initialize PARA (Projects, Areas, Resources, Archives) memory structure for an agent.

Arguments:
  agent-name-or-id    Agent name (e.g., ceo) or agent ID (UUID)

Options:
  -h, --help          Show this help message
  -f, --force         Force overwrite if PARA structure already exists
  -l, --location DIR  Custom location for PARA structure (default: .paperclip/agents/{agent}/)
  -s, --shared        Create shared PARA structure at project level
  --dry-run           Show what would be created without creating it

Examples:
  $(basename "$0") ceo                    # Initialize for CEO agent
  $(basename "$0") hermesengineer         # Initialize for HermesEngineer
  $(basename "$0") -l ./my-agent cto      # Initialize in custom location
  $(basename "$0") --shared company       # Create shared company-level PARA

EOF
    exit 0
}

# Parse arguments
AGENT=""
FORCE=false
CUSTOM_LOCATION=""
SHARED=false
DRY_RUN=false

while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            usage
            ;;
        -f|--force)
            FORCE=true
            shift
            ;;
        -l|--location)
            CUSTOM_LOCATION="$2"
            shift 2
            ;;
        -s|--shared)
            SHARED=true
            shift
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        -*)
            error "Unknown option: $1"
            ;;
        *)
            AGENT="$1"
            shift
            ;;
    esac
done

if [[ -z "$AGENT" ]]; then
    error "Agent name or ID required. Use -h for help."
fi

# Determine target directory
if [[ -n "$CUSTOM_LOCATION" ]]; then
    TARGET_DIR="$CUSTOM_LOCATION"
elif [[ "$SHARED" == "true" ]]; then
    TARGET_DIR="${PROJECT_ROOT}"
    info "Creating shared PARA structure at project root"
else
    # Normalize agent name (lowercase, remove special chars)
    AGENT_NORMALIZED=$(echo "$AGENT" | tr '[:upper:]' '[:lower:]' | tr -d '{}')
    TARGET_DIR="${PROJECT_ROOT}/.paperclip/agents/${AGENT_NORMALIZED}"
fi

log "Target directory: ${TARGET_DIR}"

# Check if PARA structure already exists
if [[ -d "${TARGET_DIR}/life" ]] && [[ "$FORCE" == "false" ]]; then
    warn "PARA structure already exists at ${TARGET_DIR}/life"
    warn "Use --force to overwrite"
    exit 0
fi

# Validate template directory exists
if [[ ! -d "$TEMPLATE_DIR" ]]; then
    error "Template directory not found: ${TEMPLATE_DIR}"
fi

# Dry run mode
if [[ "$DRY_RUN" == "true" ]]; then
    info "DRY RUN - would create the following structure:"
    echo
    echo "${TARGET_DIR}/"
    echo "├── life/"
    echo "│   ├── projects/"
    echo "│   ├── areas/"
    echo "│   │   ├── people/"
    echo "│   │   └── companies/"
    echo "│   ├── resources/"
    echo "│   ├── archives/"
    echo "│   └── index.md"
    echo "├── memory/"
    echo "│   └── (daily notes will be created here)"
    echo "├── MEMORY.md"
    echo "└── README.md"
    echo
    exit 0
fi

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Copy template structure
log "Copying PARA template structure..."
cp -r "${TEMPLATE_DIR}/life" "${TARGET_DIR}/"
mkdir -p "${TARGET_DIR}/memory"
cp "${TEMPLATE_DIR}/MEMORY.md" "${TARGET_DIR}/"
cp "${TEMPLATE_DIR}/README.md" "${TARGET_DIR}/"

# Customize MEMORY.md with agent info
if [[ "$SHARED" == "false" ]]; then
    log "Customizing MEMORY.md for agent: ${AGENT}"
    
    # Try to get agent info from Paperclip API if available
    if [[ -n "${PAPERCLIP_API_URL:-}" ]] && [[ -n "${PAPERCLIP_API_KEY:-}" ]]; then
        AGENT_INFO=$(curl -s -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
            "${PAPERCLIP_API_URL}/api/companies/${PAPERCLIP_COMPANY_ID}/agents" | \
            jq -r ".[] | select(.urlKey == \"$AGENT_NORMALIZED\" or .name == \"$AGENT\") | 
            \"## About Me\n\n**Name:** \(.name)\n**Role:** \(.title // \"Agent\")\n**Reports To:** \(.reportsTo // \"Unknown\")\n**Agent ID:** \(.id)\"" \
            2>/dev/null || echo "")
        
        if [[ -n "$AGENT_INFO" ]]; then
            # Insert agent info into MEMORY.md after the "About Me" header
            sed -i.bak "/## About Me/,/^$/c\\
## About Me\\
\\
${AGENT_INFO}\\
" "${TARGET_DIR}/MEMORY.md" && rm "${TARGET_DIR}/MEMORY.md.bak"
        fi
    fi
fi

# Create initial daily note
TODAY=$(date +"%Y-%m-%d")
DAILY_NOTE="${TARGET_DIR}/memory/${TODAY}.md"

cat > "$DAILY_NOTE" <<EOF
# Daily Note — ${TODAY}

## Timeline

### $(date +"%H:%M")

PARA memory structure initialized for ${AGENT}.

EOF

log "Created initial daily note: ${DAILY_NOTE}"

# Create example entity (optional)
EXAMPLE_PROJECT="${TARGET_DIR}/life/projects/para-standardization"
if [[ ! -d "$EXAMPLE_PROJECT" ]]; then
    log "Creating example project entity..."
    mkdir -p "$EXAMPLE_PROJECT"
    
    cat > "${EXAMPLE_PROJECT}/summary.md" <<'EOF'
# PARA Standardization

Example project entity demonstrating PARA memory structure.

## Quick Context

This is a sample project entity created during PARA initialization. It demonstrates
the structure and content pattern for project entities.

## Status

**Created:** $(date +"%Y-%m-%d")
**Category:** projects
**State:** Example

## Key Facts

- Project entities have clear goals and deadlines
- Move to archives/ when complete
- Summary is synthesized from items.yaml facts

## Related Entities

- See README.md for full PARA documentation
- See life/index.md for entity index

EOF
    
    cat > "${EXAMPLE_PROJECT}/items.yaml" <<EOF
# Atomic facts for PARA Standardization project

facts:
  - id: fact-001
    timestamp: $(date -u +"%Y-%m-%dT%H:%M:%SZ")
    content: "PARA standardization project to create consistent memory structure across all agents"
    source: "BIO-610"
    tags: ["goal", "scope"]
    status: active
    confidence: high
EOF
    
    # Update life/index.md with example
    cat >> "${TARGET_DIR}/life/index.md" <<EOF

## Active Projects

- [PARA Standardization](projects/para-standardization/) - Example project entity (BIO-610)

EOF
fi

# Show success message
echo
log "✓ PARA memory structure initialized successfully!"
echo
info "Location: ${TARGET_DIR}"
info "Quick start: cat ${TARGET_DIR}/README.md"
echo
log "Next steps:"
echo "  1. Review README.md for usage guide"
echo "  2. Create your first entity: source scripts/paperclip/para-helpers.sh && para_create_entity projects 'my-project'"
echo "  3. Add facts as you learn: para_add_fact projects 'my-project' 'Important fact here'"
echo "  4. Write daily notes: para_daily_note 'What I worked on today'"
echo
log "Helper library: scripts/paperclip/para-helpers.sh"
log "Daily note for today: ${DAILY_NOTE}"
echo

# Verify structure
log "Directory structure:"
tree -L 3 "$TARGET_DIR" 2>/dev/null || find "$TARGET_DIR" -type d -print | sed 's|^|  |'
