import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rainy's Portfolio — All rights reserved.
        </p>
      </div>

      {/* Floating scroll-up button */}
      <a
        href="#hero"
        className="absolute right-6 bottom-6 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
