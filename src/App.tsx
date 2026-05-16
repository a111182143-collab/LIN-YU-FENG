import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Calendar, Briefcase, Map, Star, Music, Landmark, User, Heart, ChevronDown, MapPin, Navigation } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.2 }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-[#d4af37]/30 selection:text-white">
      
      {/* Decorative Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-[#0a0a0a] to-[#0a0a0a]"></div>
      
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TripSection />
        <Footer />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 lg:px-12 border-b border-[#d4af37]/30">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto w-full flex flex-col items-center text-center mt-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[#d4af37]/80 uppercase tracking-[0.2em] text-xs font-semibold mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-[1px] bg-[#d4af37]/50"></span>
          <span>Portfolio</span>
          <span className="w-8 h-[1px] bg-[#d4af37]/50"></span>
        </motion.div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#d4af37] font-medium tracking-tight mb-4">
          林毓峰<span className="text-white/60 text-3xl md:text-5xl lg:text-5xl mx-2 font-light">(浩偉) LIN YU FENG</span>
        </h1>
        <h2 className="text-xl md:text-3xl text-white/50 font-light tracking-widest mb-12 uppercase">
          Precision & Excellence
        </h2>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:text-base text-white/40 mb-12 font-light">
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <Briefcase className="w-4 h-4 text-[#d4af37]" />
            <span>小額借貸｜精品販售｜卓鮑國際</span>
          </div>
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <Star className="w-4 h-4 text-[#d4af37]" />
            <span>水瓶座｜A型｜2007-02-28</span>
          </div>
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <Mail className="w-4 h-4 text-[#d4af37]" />
            <a href="mailto:A111182143@nkust.edu.tw" className="hover:text-[#d4af37] text-[#d4af37] font-mono transition-colors">A111182143@nkust.edu.tw</a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-auto pt-20 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-white/20" />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const paragraphs = [
    "朋記欠跑花用聲村百；澡每歡兔眼做老房你雄可吹真走像牛；化何林走畫申，喜着穴旦跳國是共由歡，入點假清多木久棵。",
    "做游訴蝶孝流次清外真卜要唱！嗎鴨意音里、五次早止向雨干司，車采步牙金田怪原，圓向固結活雞追，林教他夏瓜米消秋得田，夏飽收澡停第？讀蝸土力六男支氣跟美新。",
    "重才筆遠者爪害。玩下個忍因在己跟飯，民丁世就習後米衣秋後乾是空，消戶音您結尤門杯士村弓唱這言內家視，消文犬刃村多弓星別書且時浪珠未們英。尾化比念勿洋牛讀比拍忍追蛋耍扒學害；又奶到，三上升黃急去兄青。",
    "別火步以鳥道占節畫鳥親書乞言交久南雨笑像。多天幾蝶汗魚虎東卜眼浪晚錯步南。几麼來斥，錯花抱風示頁尾南男瓜。身話唱鳥世位，浪豆昌飽地蛋荷飯課新王都，着冬來。",
    "耳水內後穴包！點同央收半夕消完蝶十借家蛋鳥它重「錯知几兔扒就又」亭辛勿有巾種己教才午肖雞、兒西畫力您辛足很文助往地員邊壯工知子能。遠外眼十河央借升正，圓動主我蝸羊尾車汗找像念？苗喝娘。",
    "免葉豆法飽麻可就。開右飯右。黑松怎「兄新朱」化邊很京明豆黃斗澡怪固泉出父亭；春頁苦尾南京像九兌冒刃知得，寫蛋只吹交亭耍口都游不開，步下瓜歡三吉牠登自海各那巾打男爬。",
    "木年兆陽亭來國大是看忍左，西共後眼身前。"
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#111111] overflow-hidden relative">
      <div className="absolute top-0 right-10 p-4 opacity-5 pointer-events-none select-none">
        <span className="text-9xl font-serif italic text-white">BIO</span>
      </div>
      <motion.div {...fadeIn} className="max-w-3xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-[#e5e5e5]">About Me</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#d4af37]/30 to-transparent"></div>
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">個人自傳</span>
        </div>
        
        <div className="space-y-6 text-white/80 font-light leading-relaxed tracking-wide text-justify text-sm md:text-base">
          {paragraphs.map((text, i) => (
            <motion.p 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      period: "2019 - PRESENT",
      company: "卓鮑國際",
      role: "資金周轉",
      icon: <Landmark className="w-5 h-5 text-[#d4af37]" />,
      points: [
        "借貸給有需求的人",
        "資金買賣",
        "放貸利息不超過 7.25%"
      ]
    },
    {
      period: "2016 - 2019",
      company: "X娛樂有限公司",
      role: "DJ偉翔",
      icon: <Music className="w-5 h-5 text-white/50" />,
      points: [
        "在高雄 LAMP 當任 DJ",
        "帶動現場氣氛，規劃各類音樂表演",
        "跨部門溝通協調音樂與燈光演出"
      ]
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 relative bg-[#161616] border-y border-white/5">
      <motion.div {...fadeIn} className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">經歷軌跡</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-[#d4af37]/30 to-transparent"></div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#e5e5e5]">Experience</h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                <div className="md:col-span-3 mb-4 md:mb-0 md:text-right flex flex-col md:items-end">
                  <span className="text-white/40 font-mono text-xs tracking-widest uppercase">{exp.period}</span>
                </div>
                
                <div className="hidden md:flex col-span-1 justify-center relative">
                  <div className={`w-px h-full absolute top-8 bottom-[-4rem] ${index === 0 ? "bg-[#d4af37]/30" : "bg-white/10"}`}></div>
                  <div className={`w-10 h-10 rounded border flex items-center justify-center z-10 shadow-lg shadow-black/50 ${index === 0 ? "bg-[#d4af37]/10 border-[#d4af37]/50" : "bg-white/5 border-white/10"}`}>
                    {exp.icon}
                  </div>
                </div>

                <div className="md:col-span-8 md:pl-4">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.company}: {exp.role}</h3>
                  <ul className="space-y-3 mt-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60 font-light text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${index === 0 ? "bg-[#d4af37]" : "bg-white/20"}`}></span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TripSection() {
  const days = [
    { day: "Day 01", title: "山海啟程 ‧ 台東秘境", desc: "啟程與在地探索，享受慢活步調與道地美食。", icon: <Navigation className="w-4 h-4" /> },
    { day: "Day 02", title: "湛藍海岸 ‧ 深度慢遊", desc: "走訪自然秘境，沐浴於文化與大自然之間。", icon: <MapPin className="w-4 h-4" /> },
    { day: "Day 03", title: "部落探索 ‧ 溫泉療癒", desc: "市區名勝巡禮，夜間體驗特色文化與繁華。", icon: <Star className="w-4 h-4" /> },
    { day: "Day 04", title: "回程拾遺 ‧ 賦歸高雄", desc: "購買伴手禮與滿載回憶，平安賦歸。", icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#1c1c1c] border-t-2 border-[#d4af37]">
      <motion.div {...fadeIn} className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <Map className="w-8 h-8 text-[#d4af37] mb-4" />
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">清明連假四日遊</h2>
          <span className="block text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-4">Trip Planning</span>
          <p className="text-white/60 font-light max-w-xl text-sm leading-relaxed">
            短暫的遠行，是為了走更長遠的路。為期四天的清明連假，透過旅行沉澱身心。
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {days.map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-white/5 border border-white/5 rounded p-5 hover:bg-white/10 transition-colors group flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="block text-[10px] text-[#d4af37] font-bold tracking-widest mb-2">{item.day}</span>
                <h3 className="text-sm font-bold text-[#e5e5e5] mb-3">{item.title}</h3>
                <p className="text-white/50 font-light text-xs leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <div className="w-8 h-8 rounded bg-[#111111] flex items-center justify-center text-[#d4af37] border border-[#d4af37]/30 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center opacity-40 text-[10px] tracking-[0.5em] text-white uppercase gap-4 bg-[#0a0a0a]">
      <span>LIN YU FENG PERSONAL ARCHIVE</span>
      <span>EST. 2007 - {new Date().getFullYear()}</span>
      <span>PRECISION & EXCELLENCE</span>
    </footer>
  );
}
