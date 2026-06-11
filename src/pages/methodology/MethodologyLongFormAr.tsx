import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import type { Language } from '@/lib/i18n';
import { methodologyLocalizedPath as loc } from './methodologyLocalizedPath';

type Props = { lang: Language };

export function MethodologyLongFormAr({ lang }: Props): JSX.Element {
  const p = (path: string) => loc(lang, path);
  return (
    <>
      <section className="section-padding bg-background" id="research-design">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            1. مبادئ تصميم الأبحاث
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تبدأ كل مبادرة بتصميم منظم يحوّل الأسئلة التجارية إلى إطار بحث يمكن الاختبار عليه؛ نعمل مع فرق العلامات والشؤون الطبية ومسارات الوصول للسوق لتعريف أهداف واضحة بما يكفي لدفع القرار ولكن مرنة أيضًا للتعديل خلال تنفيذ الدراسة.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تعتمد <strong className="text-foreground">الدراسات الكمّية</strong> على موَسّق استبيان مهيكل ومقاييس مُعتمدة وتمرينات Conjoint أو MaxDiff عند الحاجة لقياس تفضُّلات التعويض. نعرض الاستبيانات لتجربة ذهنية مع خمس مشارِكين على الأقل قبل الإطلاق، ونطبّق المنطق التفرُّعي والعَشْوائي وأسئلة الالتقاط لمكافحة الاستجابات غير الجادة. لمزيد حول{' '}
            <Link to={p('/services/quantitative-research')} className="text-primary hover:underline font-medium">
              بحث الرعاية الصحية الكمّي لدينا
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تستخدم <strong className="text-foreground">الدراسات النوعية</strong> أدلة حوار شبه مهيكلة مبنية على منطق شجرة قرارات؛ سواء أكانت مقابلات طبيب فردية أو مجموعات مستشارِي الدفع أو ملاحظة ميدانية في المستشفيات؛ نُجرِّب كل دليل داخليًا ونُحدِّثُه بعد مجموعة أوّلية صغيرة. في المناطق العلاجية المعقّدة نستعين بمشرفين ذوي مهارات طبيّة يستطيعون استكشاف التفاصيل دون توجيه المشاركِ. لمحة عن{' '}
            <Link to={p('/services/qualitative-research')} className="text-primary hover:underline font-medium">
              البحث النوعي الدوائي
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            ندمج الأساليب حين نحتاج تعميمًا إحصائيًا وعرضًا تفسيريًا معًا — مثل قياس جاهزية الإطلاق باستبيان لمئتي طبيب وعشرين مقابلة عمّيقة مع اختصاصيّين كُثَّار الوصفات.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="sampling-frameworks">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            2. أطر العيِّنات وحوكمة حجم العينة
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            جودة العيِّنات تحدّد مدى قبول أي نتيجة؛ نحافظ على لوحات مهنيّي رعاية صحية في أكثر من 17 سوقًا عبر منطقتي أوروبا والشرق الأوسط وأفريقيا ودول الخليج بالإضافة لشركات شراكة عاملة وفق معايير ESOMAR وBHBIA. نعتمد تجنيدًا مدعومًا قواعد بيانات مختصّين ومُسجلِّي مستشفيات وعضويات جمعيات — لا قوائم مفتوحة من شبكة الإنترنت.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تُقوَّم الأحجام وفق مستهدفات القدرة الإحصائية المقرّمة مسبقًا؛ غالبًا نستهدف هامش خطأ لا يزيد عمومًا عن ±‎5٪‎ عند ثقة ‎95٪‎ لكل شريحة تُصدَر؛ وفي المجالات الضيقة نعتمد أساليب شبه تعداد ونُحكِم الأساليب التحليلية مع حجم الأساس المنخفض.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تضمن الحصص تمثيل التخصُّص ومكان العمل وحجم الوصف وجغرافية السوق؛ وفي الدول المتعددة نضع حصصًا لكل دولة لتجنُّب تهيمن سوق واحدة على كلِّ المجمع.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            في العمل النوعي نراجع آليات الغربلة مع عميل قبل الميدان؛ ونُثبت التخصُّص وحَقّ الوصف وأي خبرات علاج عبر آلية تأكُّد ثنائي تعقُب بين ملفات اللوحة وإجابات الفرز.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" id="fieldwork-governance">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            3. حوكمة الميدان وضابط الجودة
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            الميدان هو موضِع اندماج المنهجية مع الانضباط التشغيلي؛ لكل مشروع برتوكول ميدان يحدد جداول تجنيد وإكراميات تتماشى مع مدونات قطاع كل بلد وفترات تنظيم المقابلات وخطوص تصعيد عند تعثُّر حصص العينة.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تتضمن الاستبيانات لوحات رصد آنية لمعدَّلات الإنجاز وبزمن الإكمال الوسيط ومخارج الاستلام وإطارات تنبيه للإجابات الخطّية المتكررة؛ نراجع كل استبيان ينتهي بزمن أقل بكثير من الزمن المتوقع قبل استبعاد الإجابات الفاشلة لاختبار الجودة.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تُسجَّل المحادثات النوعية — بعلم المشاركِ — وتُحمَّل كنص متكامل، ويجب أن يقرّ مشرف بحث مختصر خلال 24 ساعة يلخص الفرضيات الأولية والطرز المبتدئة. وللبلدان المتعددة يعمل مدير مشروع مركزي باجتماعات يومية لضبط الانحراف الدلالي أو في التجنيد قبل اتساع الانحرافات.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            كما تُطبَّق آليتنا أيضًا على قطاع{' '}
            <Link to={p('/services/clinical-trial-support')} className="text-primary hover:underline font-medium">
              دعم التجارب السريرية من الميدان
            </Link>{' '}
            مع ضوابط إضافية لجدوى المواقع ومشاريع وصف بطاقات الباحثين السريريين.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="data-validation">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            4. التحقق من البيانات ورقابة جودة مُقوّية بالذكاء الاصطناعي
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تمرَّ البيانات الخام بتسلسل متعددة قبل التحليل؛ الطبقة الأولى آليَّة لمطابقة تكرارات الهويّة أو تجميع استجابات مستحيلة أو أوضاع لا تستخدم منطقيًا؛ وكمثال قد يصف طبيب أُسرة إجراءات جراحة تخصُّص خارج نطاقه.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تُعالَج المرحلة الثانية بخبراء يعيدون فحص السجلات المُشار إليها ويطابقونها مع بيانات التجنيد الأولية؛ وعند الحاجة نتصل بالمشاركين لطلب توضيح. تُزال جميع السجلات غير المصدَّق عليها من المجموعة النهائية وتُبيَّن الأسباب في سجل المعالجة.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تضيف الآليات المساندة بحث الذكاء الاصطناعي طبقة ثالثة عبر تقييم الأسئلة المفتوحة للاتساق والأهمية وحجم ادعاء كافٍ؛ ويمكن أيضًا المرور بتصنيفات موضوعات للنص النوعي يُعتمد كلها لتسريع اكتشاف الأنماط إلا أنّ الإصدار النهائي لكل استنتاج تفسيري يبقى خاضع تأكيدًا بشريًا.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            بفضل ذلك يحصل العملاء على بيانات جاهزة للاستخدام الداخلي وللمطالب التقديم إلى الهيئات التنظيمية أو دوائر الوصول إلى السوق. اطلعوا أيضًا على تكامل العناصر الوصفية ضمن خط سير عمل{' '}
            <Link to={p('/services/market-access')} className="text-primary hover:underline font-medium">
              الوصول للسوق وهيئة تقييم التكنولوجيا الصحية
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" id="ethics-compliance">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            5. الأخلاقيات، اللائحة العامّة الأوروبية للبيانات، والمواءمة مع السلطات الرقابية
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تُطبَّق مشاريعنا ضمن تركيبة امتثال تغطّي GDPR وقوانين المملكة المتحدة المتعلقة بالبيانات الشخصية وإرشادات ESOMAR ولوائح BHBIA وميثاق EphMRA. في دول مجلس التعاون الخليجي نطبِّق أيضًا PDPL في المملكة العربية السعودية وقانون حماية البيانات الاتحادي في الإمارات العربية المتحدة ومقتضيات جهاز الاتصالات الكويتي (CITRA) عند الاقتضاء.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            نحصل قبل جمع أي معلومات على موافقة كل مشارِك، وتُعرَض نماذج الموافقة بلغته المفضلة وتبيِّن الغرض ومدة احتفاظنا؛ تُحمَّى البيانات عبر الاسم المستعار عند الالتقاط وتُخزَّن على خواديم أوروبية مشفَّرة؛ ولا تُشارك مع العميل معرّفات شخصية ظاهرة دون ترخيص صريح لأي تواصل متابعة.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            عندما تنطوي الدراسات على بيانات مرتبطة بالمرضى — حتى بشكل غير مباشر عبر ما يذكره الأطباء — نفعِّل مراجعات أخلاقية حين يشترطها النظام المحلي؛ ونُحكِّم بروتوكولًا إضافيًّا لتجزئة الهوية حيث يلزم. يتلقَّى مشرفو الميدان إحاطة حول تقارير الأحداث الضارة ومسارًا للتصعيد إلى فارماكوفيجيلانس عند الزبون لا يتجاوز غالبًا ‎٢٤‎ ساعة.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            تُعالَج المبالغ المرصودة لمشاركتي الميدان عبر قنوات قابلة للتدقيق ومقاييس قيم السوق وفق جهات قطاع الدوائي في كل دولة لتقليل مخاطر الإفصاح ومكافحة الرشاوى لصالح المشارِك ولصالح الجهة الراعية معًا.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="reporting-standards">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            6. معايير التقارير وصياغة الحزم المرسلَة للعميل
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            لا قيمة لرؤى الأبحاث حتى تصِل لمَن يتّخذ قرارًا؛ لذا ننشئ كل تقاريرنا على أساس إطار يقدِّم ثلاثة إلى خمس نتائج أساس ومقاييس إجراء في الموجز التنفيذي قبل الانحدار لتفاصيل الجداول والملاحق.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تشمل تقارير المسح ملاحق منهجية كاملة (عرض تشكيلة العينة، ومخطّط الأوزان، وفترات الثقة، ونسخ الاستبانة)، بينما تُقدَّم تقارير أعمال المحادثة النوعية حول الموضوعات الأساس وتُدعَّم باقتباسات نصِّية مع احترام الهوية.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            من الأشكال المألوفة للتسليم لوح تعقُّب لدراسات المؤشر المتكرر وعروض تقديم مختصَّرة للقيادة وفُصُولاً تحليليًّا تفصيليًّا لفرق HTA؛ وفي دوراتِ{' '}
            <Link to={p('/services/competitive-intelligence')} className="text-primary hover:underline font-medium">
              الذكاء التنافسي
            </Link>{' '}
            نمكن تقارير رصد مستمر وبثًّا يُطلَق بتنبيُّه عند ظهور نشاط خارجي حسّاس للموضوع.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            تُقيَّ كل حُزمة مرتَين داخليًّا قبل تسليمها للعميل — أولًا من طرف المحلل للتيقِّن من حساب المعطيات وثانيًا من قيادة لتأكَّد المواءمة؛ كذلك تُقيَّ أيضًا مخطَّطات تعيين{' '}
            <Link to={p('/services/kol-stakeholder-mapping')} className="text-primary hover:underline font-medium">
              المؤثرين والجهات المعنيِّة
            </Link>{' '}
            بتلك الخطوط نفسها إلى جانب مخطَّطات شبكات تأثُّر ومؤثرين.
          </p>
        </div>
      </section>
    </>
  );
}
