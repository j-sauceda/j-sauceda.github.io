import { component$, useSignal } from "@builder.io/qwik";

interface Props {
  altText?: string;
  extraClasses?: string;
  height?: number;
  onLoadingText: string;
  src: string;
  width: number;
}

export const Image = component$(({altText, extraClasses, height, onLoadingText, src, width}: Props) => {
  const imageLoaded = useSignal(false);
  
  return (
    <>
      {!imageLoaded.value && <span class="text-2xl py-40">{onLoadingText}</span>}
      <img
        class={`rounded-lg ${!imageLoaded.value && 'hidden'} ${extraClasses}`}
        src={src}
        alt={altText ?? 'image'}
        height={height}
        width={width}
        onLoad$={() => imageLoaded.value = true}
      />
    </>
  )
});