import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Zap, RefreshCw, CheckCircle, Copy } from "lucide-react";

const Index = () => {
  const referralCode = "YUNFAN80780";
  const fuseUrl = "https://www.fuseenergy.com/app/boarding/premises";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard",
    });
  };

  const benefits = [
    {
      icon: Zap,
      title: "Cheapest rates on the market",
      description: "Get the best energy prices available",
    },
    {
      icon: RefreshCw,
      title: "Easy switching process",
      description: "Fuse will contact your current supplier to handle the switch",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Click on the link",
      description: "Visit Fuse Energy to start your switch",
    },
    {
      number: "2",
      title: "Follow the switch process",
      description: "Complete the simple online form",
    },
    {
      number: "3",
      title: "Enter referral code",
      description: `Use code: ${referralCode}`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Get{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                £25 to £150
              </span>{" "}
              free energy when you switch to Fuse Energy
            </h1>
            <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <p className="text-xl text-muted-foreground sm:text-2xl">
                Use referral code:
              </p>
              <div className="flex items-center gap-2">
                <code className="rounded-lg bg-gradient-primary px-6 py-3 text-2xl font-bold tracking-wider text-primary-foreground shadow-glow">
                  {referralCode}
                </code>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="icon"
                  className="transition-all hover:border-primary"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up">
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open(fuseUrl, "_blank")}
              className="mb-4"
            >
              Switch to Fuse Energy Now
            </Button>
            <p className="text-sm text-muted-foreground">
              No upfront costs • Quick & easy setup
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Why Choose Fuse Energy?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="group cursor-default overflow-hidden border-border/50 bg-card p-6 shadow-card transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 inline-flex rounded-lg bg-gradient-primary p-3 text-primary-foreground shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            How to Switch
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-border/50 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-primary opacity-10" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-xl font-bold text-primary-foreground shadow-md">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open(fuseUrl, "_blank")}
              className="mb-4"
            >
              Get Started Now
            </Button>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Join thousands of satisfied customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/20 py-8 px-4 text-center">
        <p className="text-sm text-muted-foreground">
          Switch to cleaner, cheaper energy with Fuse Energy
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Use referral code <span className="font-semibold">{referralCode}</span> to claim
          your bonus
        </p>
      </footer>
    </div>
  );
};

export default Index;
