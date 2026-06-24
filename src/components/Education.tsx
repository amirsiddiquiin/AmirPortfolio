
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '@/data/profile';

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">// EDUCATION</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Academic background
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {education.map((item, index) => (
              <div 
                key={index}
                className="tilt-card rounded-[1.75rem] bg-card/85 border border-border/60 p-6 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-1">{item.degree}</h3>
                    <p className="text-sm text-primary/70 mb-1">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{item.location}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      <span>{item.period}</span>
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
