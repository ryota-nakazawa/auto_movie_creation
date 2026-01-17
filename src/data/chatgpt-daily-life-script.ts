/**
 * ChatGPTを日常生活で活用する方法10選 - 動画スクリプト
 * 
 * パパ（先生役）と赤ちゃん（生徒役）の掛け合いによる解説動画
 * 約10分の動画用スクリプト
 */

import { VideoScript, Speaker } from "./sample-script";

export const chatgptDailyLifeScript: VideoScript = {
  title: "ChatGPTを日常生活で活用する方法10選",
  author: "ぴょた",

  chapters: [
    // ===== オープニング =====
    {
      title: "オープニング",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.001.png",
          narration: "はい、みなさんこんにちは！今日は、ChatGPTを日常生活で活用する方法を10個紹介していきます。",
          speaker: "papa" as Speaker,
          durationInSeconds: 8.2,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.001.png",
          narration: "わーい！今日もお勉強だね。ChatGPTって、お仕事で使うものだと思ってたよ。",
          speaker: "baby" as Speaker,
          durationInSeconds: 8.8,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.002.png",
          narration: "そうだね、生成AIは仕事で使うことが多いけど、実は普通の日常生活でもすごく便利なんだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 7.6,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.002.png",
          narration: "へぇ〜！どんな使い方があるの？早く教えて〜！",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.002.png",
          narration: "よし、じゃあ順番に見ていこう！日常で役立つ活用法を10個、しっかり解説していくからね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 7.4,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.002.png",
          narration: "全部覚えられるかな？頑張るぞ〜！",
          speaker: "baby" as Speaker,
          durationInSeconds: 4.1,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.002.png",
          narration: "大丈夫！どれも簡単に始められるものばかりだから、興味のあるものから試してみてね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 6.2,
        },
      ],
    },

    // ===== 活用法1: ニュース解説 =====
    {
      title: "①ニュースを解説してもらう",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.003.png",
          narration: "まず1つ目は、ニュースを解説してもらうという使い方だよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 4.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.003.png",
          narration: "ニュースって難しい言葉が多くて、よくわかんないこと多いよね。",
          speaker: "baby" as Speaker,
          durationInSeconds: 6.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.003.png",
          narration: "そうなんだよね。経済ニュースでインフレがどうとか、政治ニュースでリベラルと保守がどうとか、難しい言葉がたくさん出てくるよね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 8.6,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.003.png",
          narration: "でも、わからないこと聞くのって恥ずかしいよね…。",
          speaker: "baby" as Speaker,
          durationInSeconds: 4.8,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.003.png",
          narration: "そこでChatGPTの出番！どんな基礎的な質問をしても、嫌な顔ひとつせずに丁寧に答えてくれるんだ。国債って何？って聞いても大丈夫だよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 10.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.003.png",
          narration: "それいいね！気兼ねなく質問できるのはすごく助かる〜！",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.003.png",
          narration: "しかも、自分の意見をぶつけて議論を深めることもできるんだ。例えば、この政策についてどう思う？って聞いたり、自分の考えが正しいか確認したりできるよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 11.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.003.png",
          narration: "ディスカッションの相手にもなってくれるんだね！すごい！",
          speaker: "baby" as Speaker,
          durationInSeconds: 4.9,
        },
      ],
    },

    // ===== 活用法2: 日常の疑問 =====
    {
      title: "②日常の疑問を素早く確認",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.004.png",
          narration: "2つ目は、日常の疑問を素早く確認するという使い方。",
          speaker: "papa" as Speaker,
          durationInSeconds: 4.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.004.png",
          narration: "例えばどんな疑問？",
          speaker: "baby" as Speaker,
          durationInSeconds: 2.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.004.png",
          narration: "例えば、ゆで卵ってそのままレンチンしていいんだっけ？とか、バナナの保存方法は？とか、ちょっとした疑問があるよね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 9.1,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.004.png",
          narration: "あ〜！そういう疑問、毎日出てくるよね！いちいち検索するのもめんどくさいし。",
          speaker: "baby" as Speaker,
          durationInSeconds: 8.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.004.png",
          narration: "ChatGPTに聞けばすぐに答えが返ってくるから、検索より手軽で的確なんだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 5.9,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.004.png",
          narration: "検索だと広告とかいっぱい出てきて、どれが正解かわかんないもんね。",
          speaker: "baby" as Speaker,
          durationInSeconds: 6.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.004.png",
          narration: "そうそう！ChatGPTなら直接答えをくれるから、時間の節約にもなるよね。ちなみにゆで卵のレンチンは危険だから、やめた方がいいよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 10,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.004.png",
          narration: "え！そうなの？聞いてよかった〜！",
          speaker: "baby" as Speaker,
          durationInSeconds: 4,
        },
      ],
    },

    // ===== 活用法3: 夫婦喧嘩 =====
    {
      title: "③夫婦喧嘩を和らげてもらう",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.005.png",
          narration: "3つ目は、ちょっとユニークな使い方。夫婦喧嘩を和らげてもらうんだ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 5.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.005.png",
          narration: "え〜？AIが夫婦喧嘩の仲裁をしてくれるの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 6,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.005.png",
          narration: "仲裁というより、感情的になっている時に一旦ChatGPTと自分の気持ちを整理するんだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 6.9,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.005.png",
          narration: "なるほど〜。感情的になってる時って、うまく言葉にできないもんね。",
          speaker: "baby" as Speaker,
          durationInSeconds: 6.8,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.005.png",
          narration: "そうそう。ChatGPTと話しながら言語化することで、冷静に相手に伝えられるようになるんだ。しかもAIがめちゃくちゃ寄り添ってくれるから、本当に泣けるよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 11.1,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.005.png",
          narration: "パパ、泣いちゃったの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.005.png",
          narration: "うん、実際に泣いちゃったよ。AIとのコミュニケーション、侮れないね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 5.8,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.005.png",
          narration: "パパとママも、それで仲直りできたの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 4.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.005.png",
          narration: "うん！気持ちを整理して文字で伝えたら、すごく円満にコミュニケーションできたんだ。感情的な時こそ、一度文字にするのが大事だよね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 9.8,
        },
      ],
    },

    // ===== 活用法4: Web記事解説 =====
    {
      title: "④Web記事を解説してもらう",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.006.png",
          narration: "4つ目は、Web記事を解説してもらうという使い方だよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 4.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.006.png",
          narration: "どうやって使うの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 2.4,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.006.png",
          narration: "難しい記事のURLをChatGPTに渡して、わかりやすく解説してくださいってお願いするだけ。プロンプトは画面に表示してる通りだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 9.6,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.006.png",
          narration: "URLを渡すだけでいいんだ！簡単だね〜。",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.1,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.006.png",
          narration: "しかも疑問点があれば、さらに質問して議論を深められるから、自分で読むより理解が深まることが多いんだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 7.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.006.png",
          narration: "専門的な記事とか論文を読む時にも使えそうだね！",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.006.png",
          narration: "その通り！特に技術的な記事や英語の論文なんかは、ChatGPTに要約してもらうとすごく助かるんだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 7.8,
        },
      ],
    },

    // ===== 活用法5: 画像解説 =====
    {
      title: "⑤画像を解説してもらう",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.007.png",
          narration: "5つ目は、画像を解説してもらうという使い方。",
          speaker: "papa" as Speaker,
          durationInSeconds: 3.9,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.007.png",
          narration: "画像を解説？どういうこと？",
          speaker: "baby" as Speaker,
          durationInSeconds: 3.8,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.007.png",
          narration: "例えば、画像の中に文字があって、それをコピーしたいのに画像だからコピーできないってこと、あるよね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 7.2,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.007.png",
          narration: "あるある！スクリーンショットとかね。一文字ずつ打つのめんどくさい〜。",
          speaker: "baby" as Speaker,
          durationInSeconds: 6.4,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.007.png",
          narration: "そんな時、ChatGPTに画像を渡して、画像内の文字を出力してって頼めば、テキストとして出してくれるんだよ。OCRみたいな使い方だね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 10.6,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.007.png",
          narration: "便利〜！写真に写ってるポスターとかメニューとかも読み取れるの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 6.4,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.007.png",
          narration: "もちろん！外国語のメニューを撮影して、何が書いてあるか解説してもらうこともできるよ。旅行の時に便利だよね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 8.4,
        },
      ],
    },

    // ===== 活用法6: 献立 =====
    {
      title: "⑥料理の献立を考えてもらう",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.008.png",
          narration: "6つ目は、料理の献立を考えてもらうという使い方だよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 4.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.008.png",
          narration: "献立考えるの、本当に大変だよね〜。毎日何作ろうって悩むもん。",
          speaker: "baby" as Speaker,
          durationInSeconds: 7.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.008.png",
          narration: "そうなんだよね。ChatGPTに1週間分の献立を考えてって頼むと、栄養バランスを考慮した提案をしてくれるんだ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 8.6,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.008.png",
          narration: "1週間分も考えてくれるの？すごい！",
          speaker: "baby" as Speaker,
          durationInSeconds: 4.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.008.png",
          narration: "しかも、妊娠糖尿病とかの健康上の制約があっても、それを伝えれば対応してくれるんだよ。スーパーでの買い物時間も短縮できて一石二鳥だね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 10.6,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.008.png",
          narration: "買い物リストも作ってくれるの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 3.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.008.png",
          narration: "もちろん！献立と一緒に買い物リストも作ってもらえるから、スーパーでの時間を大幅に短縮できるよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 7.3,
        },
      ],
    },

    // ===== 活用法7: 旅行プラン =====
    {
      title: "⑦旅行プランを考えてもらう",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.009.png",
          narration: "7つ目は、旅行プランを考えてもらうという使い方。",
          speaker: "papa" as Speaker,
          durationInSeconds: 4.1,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.009.png",
          narration: "旅行の計画って楽しいけど、意外と時間かかるよね。",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.009.png",
          narration: "そうなんだよ。僕は新婚旅行で岩手に行った時、ChatGPTにプランを立ててもらったんだ。交通手段や宿泊先を伝えると、効率的な観光プランを提案してくれるよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 12.2,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.009.png",
          narration: "新婚旅行でも使ったんだ！実際どうだった？",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.009.png",
          narration: "観光地を時間いっぱい効率よく周れて、とても満足できる旅行になったよ。Notionで共有して使ってたんだ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 7.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.009.png",
          narration: "へぇ〜！移動時間とかも計算してくれるの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.2,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.009.png",
          narration: "うん！各スポットでの滞在時間や移動時間も考慮して、無理のないスケジュールを組んでくれるんだ。おすすめのレストランも教えてくれるよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 9.2,
        },
      ],
    },

    // ===== 活用法8: アイコン作成 =====
    {
      title: "⑧自分のアイコンを作ってもらう",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.010.png",
          narration: "8つ目は、自分のアイコンを作ってもらうという使い方だよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 4.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.010.png",
          narration: "アイコン作成もできるの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.010.png",
          narration: "最近のChatGPTの画像生成機能はすごく性能が高くなっていてね。自分の写真を渡すと、いろんなニュアンスのアイコンに変換してくれるんだ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 9.9,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.010.png",
          narration: "へぇ〜！パパのアイコンもChatGPTで作ったの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.9,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.010.png",
          narration: "そうだよ！今使っているアイコンも、自分の写真をベースにChatGPTに生成してもらったものなんだ。SNSのプロフィールにぴったりだよね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 9.8,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.010.png",
          narration: "かっこいい！私も作ってみたいな！",
          speaker: "baby" as Speaker,
          durationInSeconds: 4.1,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.010.png",
          narration: "アニメ風とかイラスト風とか、いろんなスタイルで作れるから、ぜひ試してみてね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 5.6,
        },
      ],
    },

    // ===== 活用法9: 壁打ち相手 =====
    {
      title: "⑨新しいことに挑戦する際の壁打ち相手",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.011.png",
          narration: "9つ目は、新しいことに挑戦する際の壁打ち相手になってもらうという使い方。",
          speaker: "papa" as Speaker,
          durationInSeconds: 5.9,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.011.png",
          narration: "壁打ち相手って何？",
          speaker: "baby" as Speaker,
          durationInSeconds: 2.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.011.png",
          narration: "アイデアが浮かんだ時に、とりあえず話を聞いてもらって、一緒に考えてもらう相手のことだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 6.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.011.png",
          narration: "なるほど〜。アイデアって思いついてもすぐ忘れちゃうもんね。",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.011.png",
          narration: "そうそう、アイデアは生物だからね。ChatGPTなら履歴として残るし、やり取りしながらアイデアをブラッシュアップできるから、ただメモするより何倍も有効なんだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 11.1,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.011.png",
          narration: "例えばどんなアイデアを相談したことがあるの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 4.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.011.png",
          narration: "新しいビジネスのアイデアや、趣味のプロジェクト、あとは動画のコンテンツアイデアなんかも相談してるよ。ChatGPTが客観的な意見をくれるから、考えが整理されるんだ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 12,
        },
      ],
    },

    // ===== 活用法10: 翻訳 =====
    {
      title: "⑩他言語の翻訳",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.012.png",
          narration: "そして最後、10個目は他言語の翻訳だよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 3.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.012.png",
          narration: "翻訳って、Google翻訳とかDeepLもあるけど、ChatGPTの方がいいの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 8.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.012.png",
          narration: "実はChatGPTの基本的な原理は翻訳機能のデコーダー部分から来ているんだ。だから言語の理解力がすごく高いんだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 8.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.012.png",
          narration: "へぇ〜！どうやって使うの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 3.6,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.012.png",
          narration: "英語の文章を渡して、わかりやすく解説してくださいって頼むだけ。単純に翻訳するだけじゃなくて、内容を噛み砕いて説明してくれるのがポイントだね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 10.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.012.png",
          narration: "なるほど！英語以外の言語でも使えるの？",
          speaker: "baby" as Speaker,
          durationInSeconds: 4.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.012.png",
          narration: "もちろん！何語で書かれた文章でも、ChatGPTがあれば内容を理解できるようになるよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 6.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.012.png",
          narration: "すごい！海外の人とメールする時にも使えそうだね。",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.6,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.012.png",
          narration: "そうだね！メールの下書きを作ってもらうこともできるよ。丁寧な表現にしてって頇めば、ビジネスメールもバッチリだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 8.6,
        },
      ],
    },

    // ===== まとめ =====
    {
      title: "まとめ",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.013.png",
          narration: "さあ、ここで今日紹介した10個の活用法をまとめておさらいしよう。",
          speaker: "papa" as Speaker,
          durationInSeconds: 5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.013.png",
          narration: "いっぱいあったね〜！覚えられるかな？",
          speaker: "baby" as Speaker,
          durationInSeconds: 4,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.013.png",
          narration: "まずはニュースの解説、日常の疑問確認、夫婦喧嘩の仲裁、Web記事の解説、画像の解説。そして献立作成、旅行プラン、アイコン作成、壁打ち相手、翻訳。この10個だね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 15.7,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.014.png",
          narration: "カテゴリで整理するとわかりやすいね！情報収集系、コミュニケーション系、生活サポート系、クリエイティブ系に分けられるんだ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 9.6,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.014.png",
          narration: "こうやって整理してもらえると、自分に合った使い方が見つけやすいね！",
          speaker: "baby" as Speaker,
          durationInSeconds: 6.8,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.014.png",
          narration: "そうだね。まずは自分の生活で困っていることや、よく調べることから始めるといいと思うよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 6.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.014.png",
          narration: "簡単なことから始めて、だんだん使いこなしていこう！",
          speaker: "baby" as Speaker,
          durationInSeconds: 5.5,
        },
      ],
    },

    // ===== エンディング =====
    {
      title: "エンディング",
      scenes: [
        {
          type: "slide",
          slideImage: "/slides/slide.015.png",
          narration: "今日お伝えしたいポイントは、まずは小さな疑問から聞いてみようということ。恥ずかしがらずに基礎的な質問をするのがコツだよ。",
          speaker: "papa" as Speaker,
          durationInSeconds: 8.2,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.015.png",
          narration: "小さいことからでいいんだね！",
          speaker: "baby" as Speaker,
          durationInSeconds: 3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.015.png",
          narration: "そう！完璧な質問じゃなくても、ChatGPTは意図を汲み取って答えてくれるから、気軽に使ってみてほしいな。",
          speaker: "papa" as Speaker,
          durationInSeconds: 8,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.015.png",
          narration: "ChatGPTはどんな質問にも嫌な顔ひとつせず答えてくれるんだもんね！",
          speaker: "baby" as Speaker,
          durationInSeconds: 6.9,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.016.png",
          narration: "ぜひみなさんも、こんな使い方してるよ〜という便利な活用法があれば、コメントで教えてくださいね。",
          speaker: "papa" as Speaker,
          durationInSeconds: 7.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.016.png",
          narration: "みんなのアイデア、聞きたいな〜！",
          speaker: "baby" as Speaker,
          durationInSeconds: 3.3,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.017.png",
          narration: "YouTubeではビジネスシーンで使える活用法も紹介しているので、興味があればぜひチェックしてみてください。",
          speaker: "papa" as Speaker,
          durationInSeconds: 6.9,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.018.png",
          narration: "今日の動画は以上です。ご視聴いただきありがとうございました！",
          speaker: "papa" as Speaker,
          durationInSeconds: 4.5,
        },
        {
          type: "slide",
          slideImage: "/slides/slide.018.png",
          narration: "いいね、チャンネル登録もよろしくね〜！ばいば〜い！",
          speaker: "baby" as Speaker,
          durationInSeconds: 6.2,
        },
      ],
    },
  ],
};

// 動画の総時間を計算
export function calculateTotalDuration(): number {
  let total = 0;
  chatgptDailyLifeScript.chapters.forEach(chapter => {
    chapter.scenes.forEach(scene => {
      total += scene.durationInSeconds;
    });
  });
  return total;
}

// エクスポート用: 総時間（秒）
export const totalDurationSeconds = calculateTotalDuration();
// エクスポート用: 総時間（分:秒形式）
export const totalDurationFormatted = `${Math.floor(totalDurationSeconds / 60)}分${totalDurationSeconds % 60}秒`;
