import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How can I start using JoxDB?", a: "You can self-host it on a server or install it along with your application as an external dependency. If you are developing your project in C or C++, then you can directly use it's engine source code which is itself written in C." },
  { q: "Is JoxDB available for all OS?", a: "Currently it is available for only Windows and Linux (nearly all distros)." },
  { q: "What is the actual advantage of using JoxDB?", a: "High-throughput + Low memory usage + Low power usage + Stability + Native-language (JQL) for operations." },
  { q: "Is this beginner friendly?", a: "Absolutely! Integrating JoxDB with your projects will be quite easy and a great experience for you." },
  { q: "Can I customize it?", a: "Of course, you can! It is open source. If you make any good changes, you can raise a PR at JoxDB's official repository on GitHub." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding gradient-bg">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="secondary-color-text">Frequently Asked </span>
        <span className="glow-text">Questions</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card border px-6 rounded-xl">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
