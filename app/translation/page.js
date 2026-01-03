"use client";

import React from "react";
import Link from "next/link";
import { MoveLeft, Eye, Calendar, ExternalLink } from "lucide-react";

// 翻译作品数据
const translationWorks = [
    {
      id: 1,
      year: "2025",
      title: "Cristiano Ronaldo: The Quest for 1,000 Goals",
      image: "/ronaldo.png",
      original:
        "Cristiano Ronaldo: 'If I get to 1,000 goals, it's fine. But if I don't, I am already the top scorer in history. I want to live in the moment now. I can no longer think long-term.'",
      translated:
        "C罗：“如果我能打进1000个进球，那当然很好。但如果不能，我也已经是足球历史上的头号射手了。我现在只想活在当下，不再考虑太长远的事。”",
      category: "Post-match Interview",
      link: "https://www.sportskeeda.com/football/news-if-i-don-t-i-m-already-player-goals-history-cristiano-ronaldo-appears-cast-doubt-1000-goal-milestone-target",
    },
    {
      id: 2,
      year: "2024",
      title: "Mohamed Salah: My Last Year at Liverpool?",
      image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=2070&auto=format&fit=crop",
      original:
        "Mohamed Salah: 'I had a good summer and had a long time to myself to try to stay positive because, as you know, it's my last year in the club. I just want to enjoy it and I don't want to think about it.'",
      translated:
        "萨拉赫：“我度过了一个愉快的夏天，有很长一段时间独处，并努力保持积极的心态，因为如你所知，这是我在俱乐部的最后一年。我只想享受其中，不想考虑太多。”",
      category: "Exclusive Interview",
      link: "https://www.espn.com/soccer/story/_/id/41084676/liverpools-mohamed-salah-admits-final-year-club",
    },
    {
      id: 3,
      year: "2025",
      title: "Kylian Mbappé: The Bernabéu Pressure",
      image: "/mbappe.png",
      original:
        "Kylian Mbappé: 'Coming to Madrid was never about the money, it was about the legacy. To hear the Bernabéu sing my name in a night like this makes all the pressure worth it.'",
      translated:
        "姆巴佩：“来到马德里从来不是为了钱，而是为了传承。在这样的夜晚听到伯纳乌球场高喊我的名字，让所有的压力都变得有价值。”",
      category: "Post-match Interview",
      link: "https://www.beinsports.com/en-us/soccer/la-liga/articles/the-dream-that-took-seven-years-to-come-true-kylian-mbapp%C3%A9-and-his-destiny-with-real-madrid-2025-10-13",
    },
    {
        id: 4,
        year: "2025",
        title: "AP News: Cristiano Ronaldo's Nations League Miracle",
        image: "/ronaldo-victory.png", // 建议放一张他捧杯流泪的照片
        original: "“I have many titles with my clubs, but nothing is better than winning for Portugal,” Ronaldo said. “It’s mission accomplished and so much joy. For the national team, if I had to break my leg, I would have broken it. It’s for a trophy, I had to play and I gave it my all.”",
        translated: "C罗：“我在俱乐部赢过无数奖杯，但没有什么比为葡萄牙夺冠更美妙。这是使命达成的狂喜。只要是为了国家队，哪怕要我踢断这条腿，我也在所不惜。为了这座奖杯，我必须上场，我已经倾其所有。”",
        category: "Championship Interview",
        link: "https://apnews.com/article/cristiano-ronaldo-portugal-trophy-a3b65832b88a8678157285f7165f9676" // 模拟AP新闻链接
      },
    {
      id: 5,
      year: "2024",
      title: "Real Madrid: UCL 15th Title Celebration",
      image: "/belin.png",
      original:
        "Jude Bellingham: 'I’ve always dreamed of playing in these games. You go through life and there are so many people who say you can't do things. Days like today remind you why it's all worth it.'",
      translated:
        "贝林厄姆：“我一直梦想参加这样的比赛。在人生中，总有很多人质疑你，说你做不到。而像今天这样的日子，会提醒你所有的付出都是值得的。”",
      category: "Sports News",
    },
    {
      id: 6,
      year: "2025",
      title: "Sky Sport: Bruno Fernandes on Loyalty",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2036&auto=format&fit=crop",
      original:
        "The issue of loyalty is not as well-regarded as it used to be. I could have left in this market, I was going to earn a lot more money, a season ago I was going to leave, I was going to win many trophies this season.",
      translated:
        "“忠诚已经不像以前那样被重视了。我本可以在这个转会窗口离开，赚更多的钱；一年前，我也可以离队，那样的话我本可以在本赛季赢得许多奖杯。”",
      category: "Official Press",
      link: "https://m.hupu.com/bbs-share/636352666.html?share=share&euid=8573629109396&cid=167540287",
    },
    {
      id: 7,
      year: "2018",
      title: "Game Localization: This is Police",
      image: "/thisispolice.png",
      original:
        "My younger colleagues might call it hypocrisy, but I call it the good old-fashioned manners. Good manners and leave the rest unsaid.",
      translated:
        "年轻同事或许认为这是虚伪，而在我看来，这是传统的得体与分寸——守住礼貌，其余留白。",
      category: "Game Dev",
      link: "https://www.3dmgame.com/games/thisisthepolice/",
    },
    {
      id: 8,
      year: "2017",
      title: "Game Localization: Sandbox: Evolution",
      image: "/sandbox.png",
      original:
        "A cute and fun individual game. I'm responsible for polishing and localizing the in-game text, ensuring it resonates with players worldwide.",
      translated:
        "一个可爱有趣的独立沙盒游戏。在其中我负责润色和本地化游戏内文本，确保中国玩家在游玩时也能真切体会到游戏创作者想传达的快乐。",
      category: "Game Dev",
      link: "https://www.3dmgame.com/games/thisisthepolice/",
    },
  ];

export default function TranslationPortfolio() {
  // 提取年份并去重排序
  const years = [...new Set(translationWorks.map((item) => item.year))].sort(
    (a, b) => b - a
  );

  return (
    <main className="min-h-screen bg-background text-text p-8 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* 返回按钮 */}
        <Link
          href="/"
          className="flex items-center gap-2 text-primary hover:text-secondary mb-12 w-fit transition-colors group"
        >
          <MoveLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl font-bold mb-4 tracking-tighter text-white">
          Translation Archive
        </h1>
        <p className="text-gray-400 mb-12 italic border-l-2 border-primary pl-4">
          // From game scripts to professional sports journalism. I'm a part-time sports news editor & translator. Here are some of my favorite translation works over the years.
        </p>

        {years.map((year) => (
          <section key={year} className="mb-20">
            {/* 年份分割线 */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-secondary shrink-0">
                <Calendar size={20} />
                <span className="text-2xl font-bold">{year}</span>
              </div>
              <div className="h-px bg-gray-800 w-full opacity-50"></div>
            </div>

            {/* 作品网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {translationWorks
                .filter((work) => work.year === year)
                .map((work) => (
                  <div
                    key={work.id}
                    className="group relative h-80 w-full overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-xl"
                  >
                    {/* 1. 背景图 */}
                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* 2. 黑色蒙版层 (z-10) */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    {/* 3. 默认显示的标题栏 (z-20) */}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent p-5 group-hover:opacity-0 transition-opacity duration-300 z-20">
                      <p className="text-primary text-[10px] mb-1 font-bold tracking-widest uppercase">
                        {work.category}
                      </p>
                      <h3 className="font-bold text-lg text-white leading-tight">
                        {work.title}
                      </h3>
                    </div>

                    {/* 4. Hover 显示的内容 (z-30) */}
                    <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between z-30">
                      {/* 顶部：类别与链接 */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2 text-primary">
                          <Eye size={16} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">
                            Contrast
                          </span>
                        </div>
                        {work.link && (
                          <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 hover:text-primary transition-colors"
                            onClick={(e) => e.stopPropagation()} // 防止点击穿透
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>

                      {/* 中间：原文与翻译对照 */}
                      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                        <div>
                          <span className="text-[9px] text-primary/70 block mb-1 font-bold">
                            EN ORIGINAL
                          </span>
                          <p className="text-[11px] leading-relaxed text-gray-300 italic">
                            "{work.original}"
                          </p>
                        </div>

                        <div className="border-t border-white/10 pt-3">
                          <span className="text-[9px] text-secondary/70 block mb-1 font-bold uppercase">
                            中文翻译
                          </span>
                          <p className="text-[13px] leading-relaxed text-white font-sans font-medium">
                            {work.translated}
                          </p>
                        </div>
                      </div>

                      {/* 底部：点缀 */}
                      <div className="pt-2 text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                        © {work.year} Archive
                      </div>
                    </div>

                    {/* 5. 亮色装饰边框 (z-40) */}
                    <div className="absolute inset-0 border border-white/5 group-hover:border-primary/30 rounded-2xl transition-colors pointer-events-none z-40" />
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
