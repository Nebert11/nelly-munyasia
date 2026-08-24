import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const storyImage = '/assets/my-story.jpg';

const storyParagraphs = [
  'I grew up in Bungoma County in a family of three girls.',
  'And for a long time, I thought I knew exactly what I wanted to become.',
  'A nurse.',
  'It felt simple. Clear. Noble.',
  'So I went to Kenya Medical Training College (KMTC) and trained for it.',
  'But somewhere along the way, I began to realise that my heart was pulling me in a slightly different direction.',
  'I still loved healthcare,  I still cared deeply about people. But I was becoming more interested in what happened outside the hospital walls.',
  'I wanted to understand why some people never made it to the hospital in the first place.',
  'Why some women were afraid to speak.',
  'Why some girls had no access to the information or services they needed.',
  'Why healthcare providers working in difficult communities often had no one listening to them.',
  "I realised I wasn't just interested in treating people.",
  'I wanted to understand the systems around them.',
  'Discovering a Different Calling',
  'So I kept learning.',
  'I studied counselling. Later, I pursued health systems management.',
  'Slowly, my career began to take shape somewhere between healthcare, communities, advocacy and leadership.',
  'I had started out wanting to become a nurse.',
  'But I was beginning to understand that there was more than one way to care for people.',
  'The Three Months That Changed Everything',
  'In 2012, I joined the Reproductive Health Network Kenya.',
  'At the time, I was only supposed to be there for three months.',
  'I had no idea that those three months would change the direction of my life.',
  'What struck me about RHNK was the people.',
  'The healthcare providers whose voices were often unheard.',
  'The communities where women and girls were sometimes expected to remain silent.',
  'The people doing difficult work quietly, without recognition.',
  'I remember thinking, This is where I want to be.',
  'So I stayed.',
  'And over the years, RHNK became more than just a workplace for me.',
  'It became part of my purpose.',
  'Stepping Into Leadership',
  'In 2017, I became a Programme Manager.',
  'A year later, I was appointed Executive Director.',
  'I remember understanding the weight of that responsibility.',
  'Because leadership looks very different when you are standing on the outside looking in.',
  'From the outside, people see the title.',
  'They see the meetings.',
  'They see the decisions.',
  'They see the organisation growing.',
  "What they don't always see are the moments when you go home carrying questions that nobody else can answer for you.",
  'Leadership can be very lonely.',
  'People think you have everything figured out.',
  "They assume you don't need help.",
  'But they still expect you to show up for them.',
  'And somehow, you have to.',
  'That is one of the biggest lessons leadership has taught me.',
  'You cannot do everything alone.',
  "In fact, you shouldn't.",
  'Over time, I have learned to trust people. To delegate. To build teams. To create structures that can survive and grow beyond one individual.',
  'Because an organisation should never depend on one person being the strongest person in the room.',
  'The real goal is to build a room full of strong people.',
  'Growing Something Bigger Than Myself',
  'When I look at RHNK today, I sometimes think about where we started.',
  'We were a relatively small organisation with a small team and a growing vision.',
  'Today, we work with hundreds of healthcare providers and collaborate with more than 30 partners across different programmes.',
  'Our work has grown beyond service delivery.',
  'We are part of conversations around advocacy, policy and reproductive health.',
  'We are working with communities, with women, with girls and with healthcare providers.',
  'And yes, I am proud of the growth.',
  'But for me, growth has never really been about numbers.',
  'Numbers look good in reports.',
  "But numbers don't always tell you what change feels like.",
  'What Change Really Looks Like',
  'Change is a healthcare provider who finally feels heard.',
  'A young woman who gets access to information that changes the choices she can make about her life.',
  'A community that begins to understand that women and girls deserve not only services, but dignity.',
  'That is the kind of growth that stays with me.',
  'That is the kind of impact I am proud to be part of.',
  'Learning to Become a Better Leader',
  'In 2022, I had the opportunity to be part of the inaugural WomenLift Health Leadership Programme.',
  'It came at an important moment in my journey.',
  'Sometimes you lead for so long that you forget to pause and ask yourself:',
  'What kind of leader am I becoming?',
  'That experience gave me space to reflect.',
  'To learn.',
  'To understand that leadership is not about having all the answers.',
  'It is about continuing to grow while helping others grow too.',
  'The People Who Help Us Find Our Way',
  'I have been fortunate to have people who have guided me along the way.',
  'One of them is Everlyne Opondo.',
  'She has been an important mentor and a source of professional guidance in my journey.',
  "I don't think we talk enough about mentorship.",
  'Sometimes, all you need is someone who has walked a little further ahead to remind you that the road you are on is possible.',
  'Where It All Began',
  'But long before I became a leader, my father was teaching me something important.',
  'He raised three girls and encouraged us to believe in ourselves.',
  'He taught us to support one another.',
  'To stand together.',
  'I think that stayed with me.',
  'Maybe that is why, even today, I believe leadership is ultimately about people.',
  'Not titles.',
  'Not offices.',
  'People.',
  'Coming Back to What Matters',
  'My children have also become an important part of my support system.',
  'They remind me that there is a world outside deadlines, board meetings and strategic plans.',
  'Sundays are important to me.',
  'They give me a chance to slow down.',
  'To spend time with family.',
  'To reconnect.',
  'Because when your work is about changing the world, you can sometimes forget to sit still and enjoy the people who make your own world meaningful.',
  'Looking to the Other Side',
  'When I think about the future, I know I still have more to give.',
  'One day, I would like to work within a foundation or a funding organisation.',
  'I have spent years on the other side.',
  'I know what it feels like to have a good idea and struggle to find the resources to bring it to life.',
  'I know what it means to lead an organisation, implement programmes, build partnerships and constantly ask:',
  'How do we keep this work going?',
  'Perhaps one day, I would like to sit on the other side of that conversation.',
  'To help organisations with meaningful ideas find the resources they need.',
  'To understand their challenges because I have lived them.',
  'To see potential in organisations that may not have the loudest voices, but are doing some of the most important work.',
  'More Than the Dream I Started With',
  'Sometimes, I think back to that young girl from Bungoma who wanted to become a nurse.',
  'She probably imagined herself in a hospital.',
  'She probably imagined a uniform.',
  'A ward.',
  'Patients.',
  "She didn't know that her journey would take her into communities, boardrooms, policy conversations and leadership spaces.",
  "She didn't know she would one day lead an organisation.",
  'But perhaps the dream never really changed.',
  'I still wanted to help people.',
  'I just discovered that there was more than one way to heal.',
  'Sometimes, healing happens in a hospital.',
  'And sometimes, it happens when a woman finally finds her voice.',
  'When a girl is given a choice.',
  'When a healthcare provider is finally heard.',
  'When an organisation becomes strong enough to keep serving long after you have left the room.',
  "I didn't stop being interested in healthcare.",
  'I simply discovered that my calling was bigger than the clinic.',
  'And I am still discovering where that calling will take me next.',
];

export default function Story() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="story" className="relative bg-forest-700 section-py">
      <div className="container-px">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={storyImage}
                alt="Nelly Munyasia portrait"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-700/60 via-transparent to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-tl-2xl border-l-2 border-t-2 border-gold-400/30" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              My Story
            </span>

            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
              MY STORY
            </h2>

            <div className="mt-8 space-y-5">
              {storyParagraphs.slice(0, expanded ? storyParagraphs.length : 12).map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-cream-100/70 sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
            >
              {expanded ? 'Show Less' : 'Read My Full Story'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
