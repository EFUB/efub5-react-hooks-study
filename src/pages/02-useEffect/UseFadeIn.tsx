import { useFadeIn } from '@/hooks';

const UseFadeIn = () => {
  const fadeInH1 = useFadeIn<HTMLHeadingElement>(1, 2);
  const fadeInP = useFadeIn<HTMLParagraphElement>(5, 10);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        vitae, eaque laborum et est provident modi ullam omnis. Consequuntur
        autem perspiciatis commodi veritatis quia molestiae perferendis
        repudiandae quod neque reprehenderit.
      </p>
    </div>
  );
};

export default UseFadeIn;
