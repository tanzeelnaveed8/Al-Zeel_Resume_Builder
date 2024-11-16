declare module 'html2pdf.js' {
    const html2pdf: {
      from: (element: HTMLElement) => {
        set: (options: any) => html2pdf;
        save: () => void;
      };
    };
    export = html2pdf;
  }
  
 
