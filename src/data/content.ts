export const HOME = {
  heroText:
    "Sumqayıt məktəblərinin şagirdləri tərəfindən qurulan, təhsil və təşkilat işləri aparmaq üçün yaradılmış gənclər klubu.",
  intro: {
    title: "Klubun məqsədi",
    paragraphs: [
      "SMK məktəb şagirdlərinin fəaliyyətlərini daha sistemli qurmağa imkan verən bir birləşmədir. Klub işləri məktəb çərçivəsində planlanır və idarə heyəti tərəfindən idarə olunur.",
      "Klub müxtəlif məktəblərin şagirdlərini birləşdirir. Qərarlar idarə heyətinin rəhbərliyi ilə qəbul edilir və üzvlərin iştirakı ilə həyata keçirilir.",
    ],
  },
  scope: {
    title: "Fəaliyyət sahələri",
    items: [
      {
        title: "Təhsil",
        description: "Məktəb müzakirələri və məktəbdaxili təhsil layihələri.",
      },
      {
        title: "Təşkilat",
        description: "Klub işlərinin planlanması, təşkilatı və hesabatı.",
      },
      {
        title: "Komanda",
        description: "Müxtəlif məktəblərin şagirdləri arasında əməkdaşlıq.",
      },
    ],
  },
} as const;

export const TEAM_PAGE = {
  description: "Klub işlərini idarə edən rəhbər heyət.",
} as const;

export const REGISTRATION_PAGE = {
  description: "Kluba qoşulmaq üçün aşağıdakı məlumatları doldurun.",
  steps: [
    "Bütün sahələr məcburidir.",
    "Form doldurulduqda hazır mətn avtomatik açılır.",
    "WhatsApp mesajı göndərildikdən sonra klub əlaqə saxlayacaq.",
  ],
} as const;
