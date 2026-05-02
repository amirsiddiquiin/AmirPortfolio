
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Aligarh Muslim University · Aligarh, India",
    period: "2018 – 2021",
  },
  {
    degree: "Bachelor of Science — Statistics",
    institution: "Aligarh Muslim University · Aligarh, India",
    period: "2013 – 2016",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// EDUCATION</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Academic background
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {educationData.map((education, index) => (
              <div 
                key={index}
                className="rounded-xl bg-card border border-border/60 p-6 hover-lift fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-1">{education.degree}</h3>
                    <p className="text-sm text-primary/70 mb-2">{education.institution}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      <span>{education.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
