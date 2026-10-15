import ExpandLink from '@/components/UI/Expand Button/ExpandLink';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactButton from '@/components/UI/Contact/ContactButton';

export default function Landing() {
  return (
    <section>
      <div className='mx-auto flex min-h-[80vh] w-full max-w-200 flex-col items-center justify-center py-12'>
        <div className='flex w-full max-w-150 flex-col items-center gap-6'>
          <div className='flex flex-col items-center gap-5 text-center'>
            <h1 className='text-text font-bold text-5xl md:text-[56px] lg:text-6xl leading-tight'>
              I'm Bryan Degante
            </h1>
            <h2 className='text-text leading-tight font-semibold text-3xl md:text-4xl'>
              A Frontend Developer Focused on clean UI & Smooth Animations
            </h2>
            <h3 className='text-text font-normal leading-tight text-xl lg:text-2xl '>
              Building responsive interfaces with modern web technologies.
            </h3>
          </div>
          <ul className='flex flex-wrap items-center justify-center gap-3 list-none'>
            <li>
              <ExpandLink
                text='GitHub'
                icon={<FaGithub className='text-sm text-text sm:text-base' />}
                link='https://github.com/BryanDegante'
                newPage={true}
              />
            </li>

            <li>
              <ExpandLink
                text='LinkedIn'
                icon={<FaLinkedin className='text-sm text-text sm:text-base' />}
                link='https://www.linkedin.com/in/bryandegante-dev/'
                newPage={true}
              />
            </li>

            <li>
              <ContactButton />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
