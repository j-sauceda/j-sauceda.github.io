import { $, component$, useSignal } from "@builder.io/qwik";
import { Image, type ImageTransformerProps, useImageProvider } from "qwik-image";

interface Props {
  altText?: string;
  extraClasses?: string;
  height?: number;
  onLoadingText: string;
  src: string;
  width: number;
}

export default component$(({altText, extraClasses, height, onLoadingText, src, width}: Props) => {
  const imageLoaded = useSignal(false);

  const imageTransformer$ = $(
    ({ src, width, height }: ImageTransformerProps): string => {
      // Set your image loader service
      return `${src}?height=${height}&width=${width}&format=webp&fit=fill`;
    }
  );

  // Global Provider (required)
  useImageProvider({
    // Overwrite default values [3840, 1920, 1280, 960, 640]
    resolutions: [640],
    imageTransformer$,
  });
  
  return (
    <>
      {!imageLoaded.value && <span class="text-2xl">{onLoadingText}</span>}
      <Image
        alt={altText}
        class={`rounded-lg ${!imageLoaded.value && 'hidden'} ${extraClasses}`}
        height={height}
        layout="constrained"
        objectFit="fill"
        onLoad$={() => imageLoaded.value = true}
        src={src}
        width={width}
      />
    </>
  )
});
