import Image from "next/image";

export function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16">
      <div className="container max-w-xl lg:max-w-4xl">
        <div className="rounded-xl bg-muted/30 p-4 ring-1 ring-inset ring-border">
          <div className="relative aspect-video overflow-hidden rounded-lg border">
            <Image
              className="size-full object-cover object-center"
              src="/images/mermaid.jpeg"
              alt="preview landing"
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
