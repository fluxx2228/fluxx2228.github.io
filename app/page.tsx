import {
  ChevronDown,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  Headphones,
  Heart,
  Mail,
  MapPin,
  Target,
} from "lucide-react";
import { TextScanner } from "@/components/ui/animated-text-10";
import { ShaderBackground } from "@/components/ui/blue-noise";

const facts = [
  {
    icon: GraduationCap,
    title: "Учёба",
    text: "Готовлюсь к ЕГЭ и много практикуюсь в информатике. Хочу поступить в московский вуз — скорее всего на IT-специальность, окончательно решу после экзаменов.",
  },
  {
    icon: Target,
    title: "Цели",
    text: "Разобраться, как применять ИИ в учёбе и работе: связать ChatGPT, Claude и VS Code в один рабочий процесс. Сделать свой сайт — вот он — и Telegram-бота.",
  },
  {
    icon: Dumbbell,
    title: "Воркаут",
    text: "Стою на руках, раньше делал выходы силой — возвращаю их. Тренировался и с тренером, и сам. Цель — рельефное тело.",
  },
  {
    icon: Gamepad2,
    title: "Игры",
    text: "Долго играл в GTA на сервере Majestic, особенно в соревновательном режиме: с друзьями продумывали тактики, а больше всего я любил прокачивать свой скилл.",
  },
  {
    icon: Headphones,
    title: "Музыка и кино",
    text: "Меломан, слушаю в основном русский рэп. Люблю все фильмы про Человека-паука.",
  },
  {
    icon: Heart,
    title: "Что для меня важно",
    text: "Семья, здоровье, личностное развитие, самостоятельность и достижение целей.",
  },
];

const photos = ["/photos/photo1.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg"];

export default function Home() {
  return (
    <>
      {/* Фон закреплён за всей страницей и не прокручивается вместе с контентом. */}
      <div className="fixed inset-0 -z-10">
        <ShaderBackground className="h-full w-full" />
      </div>

      <main className="relative">
        <section className="flex min-h-svh flex-col items-center justify-center px-4">
          <TextScanner
            text="МАКС СЕМАКИН"
            className="text-4xl sm:text-6xl md:text-7xl"
            accentColor="var(--color-blue-500)"
          />
          <a
            href="#about"
            aria-label="Листать вниз"
            className="absolute bottom-8 animate-bounce text-foreground/70 transition-colors hover:text-foreground"
          >
            <ChevronDown className="size-8" />
          </a>
        </section>

        <section
          id="about"
          className="mx-auto flex min-h-svh max-w-5xl scroll-mt-8 flex-col justify-center gap-10 px-4 py-24"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-5xl">Обо мне</h2>
            <p className="flex items-center gap-2 text-sm text-blue-300">
              <MapPin className="size-4" />
              Омск → Москва
            </p>
            <p className="max-w-2xl text-lg text-foreground/80">
              Привет! Я Максим. Вырос в Омске, прожил там 16 лет и недавно
              переехал в Москву. По характеру импульсивный и добрый, поначалу
              немного застенчивый, но когда привыкаю к людям — раскрываюсь и
              люблю посмеяться. Сейчас настроен учиться и идти к своим целям.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-md"
              >
                <Icon className="mb-4 size-6 text-blue-400" />
                <h3 className="mb-2 text-lg font-medium">{title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {photos.map((src) => (
              <div
                key={src}
                className="aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md"
              >
                <img
                  src={src}
                  alt="Фото Макса"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
            <Mail className="size-5 shrink-0 text-blue-400" />
            <p className="text-foreground/80">
              Контакты: добавьте почту, Telegram или соцсети.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
