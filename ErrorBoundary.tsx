"use client";

import { Component, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import Button from "@/components/ui/Button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
          <div className="h-11 w-11 rounded-full bg-danger/10 flex items-center justify-center">
            <AlertTriangle size={18} className="text-danger" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">Something went wrong</p>
            <p className="text-xs text-text-secondary mt-1">
              Try refreshing the page. If it keeps happening, let us know.
            </p>
          </div>
          <Button size="sm" onClick={() => this.setState({ hasError: false })}>
            Try again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
