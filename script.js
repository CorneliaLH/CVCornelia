window.addEventListener("load", startSite);

const root = document.getElementById("root");

function startSite() {
  root.innerHTML = "";
  //Menu

  let headerLanguageBtn = document.createElement("button");
  headerLanguageBtn.innerText = "English";
  headerLanguageBtn.classList = "headerLanguageBtn";
  root.append(headerLanguageBtn);

  const headerMenu = document.createElement("header");
  headerMenu.classList = "headerMenu";
  root.append(headerMenu);

  const containerMenu = document.createElement("div");
  containerMenu.classList = "menu";
  headerMenu.append(containerMenu);

  const divMenu = document.createElement("div");
  divMenu.classList = "menu__burger";
  divMenu.id = "menuButton";
  divMenu.ariaLabel = "menu open";
  containerMenu.append(divMenu);

  //Open and Close menu
  let menuBtn = document.querySelector(".menu");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      nav.style.display = "block";
      containerMenu.style.background = "white";
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      nav.style.display = "none";
      menuOpen = false;
    }
  });

  //Create list menu

  const nav = document.createElement("nav");
  nav.classList = "nav";
  nav.id = "navbar";
  headerMenu.append(nav);

  let ulNav = document.createElement("ul");
  ulNav.classList = "nav__list";
  nav.append(ulNav);

  let menuArray = [
    "Home",
    "Bakgrund",
    "Färdigheter",
    "Arbetslivserfarenhet",
    "Utbildning",
    "Socialt",
    "Kontakt",
  ];

  for (let i = 0; i < menuArray.length; i++) {
    const liNav = document.createElement("li");
    liNav.classList = "nav__item";
    const aNav = document.createElement("a");
    aNav.classList = "nav__link";
    aNav.href = "#" + "navlista" + [i];
    aNav.innerText = menuArray[i];
    ulNav.append(liNav);
    liNav.append(aNav);
  }

  ulNav.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    nav.style.display = "none";
    menuOpen = false;
  });

  //MAIN: Presentation Card with foto
  //LEFT side content

  const main = document.createElement("main");
  root.append(main);

  const sectionCard = document.createElement("section");
  sectionCard.classList = "card";
  main.append(sectionCard);

  const divCardLeft = document.createElement("div");
  divCardLeft.classList = "card__contentLeft";
  sectionCard.append(divCardLeft);

  let h1Card = document.createElement("h1");
  h1Card.classList = "card__title";
  h1Card.innerText = `Hej, jag heter Cornelia,
och jag utbildar 
mig till 
Front End utvecklare`;
  divCardLeft.append(h1Card);

  let cardBtnMail = document.createElement("a");
  cardBtnMail.classList = "cardBtnMail";
  cardBtnMail.ariaLabel = "Tryck för att sända mail till Cornelia";
  cardBtnMail.href = "mailto: cornelialisaharder@gmail.com";
  cardBtnMail.innerText = "Maila mig";
  divCardLeft.append(cardBtnMail);

  let cardBtnFont = document.createElement("i");
  cardBtnFont.classList = "card__buttonFont far fa-envelope";
  cardBtnMail.append(cardBtnFont);
  // list for links on card left

  let arrayCardLinks = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/cornelia-harder-140442222/",
    },
    { name: "Github", link: "https://www.github.com/CorneliaLH" },
    { name: "Portfolio", link: "#" },
  ];

  const cardList = document.createElement("ul");
  cardList.classList = "card__list";
  divCardLeft.append(cardList);

  for (let u = 0; u < arrayCardLinks.length; u++) {
    const cardItem = document.createElement("li");
    cardItem.classList = "card__item";
    const cardLink = document.createElement("a");
    cardLink.classList = "card__link";
    cardLink.innerText = arrayCardLinks[u].name;
    cardLink.href = arrayCardLinks[u].link;

    cardList.append(cardItem);
    cardItem.append(cardLink);
  }
  //RIGHT side content
  const cardContentRight = document.createElement("picture");
  cardContentRight.classList = "card__contentRight";
  sectionCard.append(cardContentRight);

  let cardImg = document.createElement("img");
  cardImg.classList = "card__img";
  cardImg.title = "Leende Cornelia";
  cardImg.src = "img/cornelia1.png";
  cardImg.width = "170";
  cardImg.height = "220";
  cardImg.loading = "lazy";
  cardImg.alt = "Leende Cornelia";
  cardContentRight.append(cardImg);

  //PAGE TWO

  //BAKGRUND

  const containerPage2 = document.createElement("div");
  containerPage2.classList = "container__page2";
  main.append(containerPage2);

  const sectionBackground = document.createElement("section");
  sectionBackground.classList = "sectionBackground";
  containerPage2.append(sectionBackground);

  const containerBackground = document.createElement("div");
  containerBackground.classList = "container__background";
  sectionBackground.append(containerBackground);

  const containerBackgroundLeft = document.createElement("div");
  containerBackgroundLeft.classList = "backgroundContainer__left";
  containerBackground.append(containerBackgroundLeft);

  let backgroundTitle1 = document.createElement("h2");
  backgroundTitle1.classList = "header2";
  backgroundTitle1.id = "navlista1";
  backgroundTitle1.innerText = "- Bakgrund";
  containerBackgroundLeft.append(backgroundTitle1);

  const backgroundArticle = document.createElement("article");
  backgroundArticle.classList = "articleBackground";
  backgroundArticle.id = "articleBackground";
  containerBackgroundLeft.append(backgroundArticle);

  let backgroundArticleHeader = document.createElement("h3");
  backgroundArticleHeader.classList = "header3 articleBackground__title";
  backgroundArticleHeader.innerText = "Erfarenhet från flera branscher";
  backgroundArticle.append(backgroundArticleHeader);

  let backgroundParagraph = document.createElement("p");
  backgroundParagraph.classList = "listItem articleBackground__text";
  backgroundParagraph.id = "articleBackground__text";
  backgroundParagraph.innerText = `Programmering har alltid varit ett intresse som jag nu ser fram emot att ha som karriär. Jag har tidigare arbetat som specialisttandläkare inom ortodonti och är nu redo för nya utmaningar.`;
  backgroundArticle.append(backgroundParagraph);

  // SKILLS

  const containerBackgroundRight = document.createElement("div");
  containerBackgroundRight.classList = "backgroundContainer__right";
  containerBackground.append(containerBackgroundRight);

  let skillsTitle1 = document.createElement("h2");
  skillsTitle1.classList = "header2";
  skillsTitle1.id = "navlista2";
  skillsTitle1.innerText = "- Färdigheter";
  containerBackgroundRight.append(skillsTitle1);

  const skillsArticle = document.createElement("article");
  skillsArticle.classList = "articleSkills";
  skillsArticle.id = "articleSkills";
  containerBackgroundRight.append(skillsArticle);

  let skillsBarContainer1 = document.createElement("div");
  skillsBarContainer1.classList = "skillsBarContainer1";
  skillsArticle.append(skillsBarContainer1);

  let arraySkills = [
    {
      heading: "HTML",
      bar: "90",
    },
    {
      heading: "CSS",
      bar: "80",
    },
    {
      heading: "Javascript",
      bar: "50",
    },
    {
      heading: "Angular",
      bar: "10",
    },
  ];

  for (let i = 0; i < arraySkills.length; i++) {
    let skillsBarContainer2 = document.createElement("div");
    skillsBarContainer2.classList = "skillsBarContainer2";
    let headingSkills = document.createElement("h4");
    headingSkills.innerText = arraySkills[i].heading;
    let skillsBar1 = document.createElement("div");
    skillsBar1.classList = "progress";
    let skillsBar2 = document.createElement("div");
    skillsBar2.classList = "progress-bar";
    skillsBar2.dataProgress = arraySkills[i].bar;
    let bar = document.createElement("span");
    bar.innerText = arraySkills[i].bar + "%";
    skillsBar2.classList.add("progress-bar" + [i]);
    skillsBarContainer1.append(skillsBarContainer2);
    skillsBarContainer2.append(headingSkills, skillsBar1);
    skillsBar1.append(skillsBar2);
    skillsBar2.append(bar);
  }

  const progressBars = document.querySelectorAll(".progress-bar");

  function showProgress() {
    for (let u = 0; u < arraySkills.length; u++) {
      document.querySelector(".progress-bar" + [u]).style.opacity = 1;
      document.querySelector(
        ".progress-bar" + [u]
      ).style.width = `${arraySkills[u].bar}%`;
      document.querySelector(".progress-bar" + [u]).style.transition = "all 2s";
    }
  }

  function hideProgress() {
    for (let o = 0; o < arraySkills.length; o++) {
      document.querySelector(".progress-bar" + [o]).style.opacity = 0;
      document.querySelector(".progress-bar" + [o]).style.width = 0;
    }

    //   progressBars.forEach((p) => {
    //     p.style.opacity = 0;
    //     p.style.width = 0;
    //   });
  }

  window.addEventListener("scroll", () => {
    const sectionPos = skillsBarContainer1.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos) {
      console.log("hej");
      showProgress();
    } else {
      console.log("hå");
      hideProgress();
    }
  });

  // let skillsArticleHeader = document.createElement("h3");
  // skillsArticleHeader.classList = "header3 articleSkills__title";
  // skillsArticleHeader.innerText = "Jag beskrivs ofta som:";
  // skillsArticle.append(skillsArticleHeader);

  // const skillsList = document.createElement("ul");
  // skillsList.classList = "articleSkills__list";
  // skillsArticle.append(skillsList);

  // let skillsArray = ["Strukturerad", "Pålitlig", "Lösningsorienterad"];

  // skillsArray.forEach((element) => {
  //   let skillsArrayItem = document.createElement("li");
  //   skillsArrayItem.classList = "listItem";
  //   skillsArrayItem.innerText = element;
  //   skillsList.append(skillsArrayItem);
  // });

  //UTBILDNING

  const sectionEducation = document.createElement("section");
  sectionEducation.classList = "sectionEducation";

  containerPage2.append(sectionEducation);

  const containerEducation = document.createElement("div");
  containerEducation.classList = "container__education";
  sectionEducation.append(containerEducation);

  let educationTitle1 = document.createElement("h2");
  educationTitle1.classList = "header2 education__title";
  educationTitle1.id = "navlista4";
  educationTitle1.innerText = "- Utbildning";
  containerEducation.append(educationTitle1);

  const educationArticle = document.createElement("article");
  educationArticle.classList = "articleEducation";
  educationArticle.id = "articleEducation>";
  containerEducation.append(educationArticle);

  let educationArray = [
    {
      title: "Front End developer",
      item1: `Medieinstitutet Yrkeshögskola / Från oktober 2021 med förväntad examen maj 2023`,
      item2: `Utbildningen Front End Developer ger kompetens att använda den webbteknik som krävs för att producera avancerade webbplatser. Allt från JavaScript, versionshantering, ramverk, html, CSS, webbdesign och användbarhet/UX.
      Utbildningen inkluderar allt från programmeringsspråk tillkunskaper i utveckling av mobila webbapplikationer.`,
    },
    {
      title: "Specialisttandläkarutbildning tandreglering",
      item1: "Köpenhamns universitet / Från september 2013 till oktober 2016",
      item2: `Utbildningen omfattar både klinisk och teoretisk undervisning, praktik, obligatoriska kurser samt avslutande examination. Utbildnignen har även medfört att jag nästan är flytande i tal och skrift i det danska språket.`,
    },
    {
      title: `Tandläkarutbildning`,
      item1: "Malmö högskola / Från oktober 2005 till juni 2010",
      item2: `Tandläkarutbildningen bedrevs enligt PBL, problembaserat lärande, vilket innebär att studierna baseras på fallstudier och problemlösning.`,
    },
    {
      title: `Engelska A`,
      item1: "Lunds universitet / Från augusti 2004 till december 2004",
    },
    {
      title: `Juridisk översiktskurs`,
      item1: "Lunds universitet / Från mars 2005 till juni 2005",
    },
  ];

  educationArray.forEach((element) => {
    const educationArticleHeader = document.createElement("h3");
    educationArticleHeader.classList = "header3 articleEducation__title";
    educationArticleHeader.innerText = element.title;
    educationArticle.append(educationArticleHeader);

    const educationList = document.createElement("ul");
    educationList.classList = "article__list";
    educationArticle.append(educationList);

    const educationListItem1 = document.createElement("li");
    educationListItem1.classList = "listItem";
    educationListItem1.innerText = element.item1;

    const educationListItem2 = document.createElement("li");
    educationListItem2.classList = "listItem";
    educationListItem2.innerText = element.item2;

    educationList.append(educationListItem1);

    if (element.item2 != undefined) {
      educationList.append(educationListItem2);
    }
  });

  //ARBETSLIVSERFARENHET

  const sectionWork = document.createElement("section");
  sectionWork.classList = "sectionWork";
  containerPage2.append(sectionWork);

  const containerWork = document.createElement("div");
  containerWork.classList = "container__education";
  sectionWork.append(containerWork);

  let workTitle1 = document.createElement("h2");
  workTitle1.classList = "header2 education__title";
  workTitle1.id = "navlista3";
  workTitle1.innerText = "- Arbetslivserfarenhet";
  containerWork.append(workTitle1);

  const workArticle = document.createElement("article");
  workArticle.classList = "articleEducation";
  workArticle.id = "articleEducation>";
  containerWork.append(workArticle);

  let workArray = [
    {
      title: "Arbetsplats: Köpenhamns Kommun",
      item1: `Specialisttandläkare / Från augusti 2020 till april 2021`,
      item2: `Kort om rollen: Rollen innebär stor erfarenhet av teamarbete och delegering. Arbetade kommunalt i Köpenhamns kommun med ortodontisk behandling av barn och ungdomar. Behandlingarna inkluderar både avtagbar apparatur och fast apparatur inklusive behandlingar med skeletal förankring.`,
    },
    {
      title: "Arbetsplats: Region Jämtland Härjedalen",
      item1: "Specialisttandläkare / Från september 2018 till juni 2020",
      item2: `Kort om rollen: Fått erfarenhet av behandling med fast apparatur och med skeletal förankring samt varit handledare för vår tandhygienist i hennes examensarbete till ort-assistent utbildningen.`,
    },
    {
      title: `Frösöstrand Folktandvård`,
      item1: "Tandläkare / Från september 2010 till juni 2013",
      item2: `Kort om rollen: Arbetade med både barn- och vuxentandvård.
    Nischad inom Ortodonti.`,
    },
  ];

  workArray.forEach((element) => {
    const workArticleHeader = document.createElement("h3");
    workArticleHeader.classList = "header3 articleWork__title";
    workArticleHeader.innerText = element.title;
    workArticle.append(workArticleHeader);

    const workList = document.createElement("ul");
    workList.classList = "article__list";
    workArticle.append(workList);

    const workListItem1 = document.createElement("li");
    workListItem1.classList = "listItem";
    workListItem1.innerText = element.item1;

    const workListItem2 = document.createElement("li");
    workListItem2.classList = "listItem";
    workListItem2.innerText = element.item2;

    workList.append(workListItem1, workListItem2);
  });

  //PORTFOLIO

  // const containerPortfolio = document.createElement("div");
  // containerPortfolio.classList = "sectionEducation";
  // containerPage2.append(containerPortfolio);

  // const portfolio = document.createElement("div");
  // containerPortfolio.append(portfolio);
  // portfolio.classList = "header2 container__education";
  // portfolio.id = "portfolio";
  // portfolio.innerHTML = "Portfolio";

  // const ulPortfolio = document.createElement("ul");
  // portfolio.append(ulPortfolio);

  // let portfolioOpen = false;

  // fetch("https://api.github.com/users/CorneliaLH/repos")
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (json) {
  //     containerPortfolio.addEventListener("click", showPages);

  //     function showPages() {
  //       ulPortfolio.innerHTML = "";

  //       if (portfolioOpen == false) {
  //         portfolioOpen = true;
  //         // for (let i = 0; i < json.length; i++) {
  //         let liPortfolio1 = document.createElement("li");
  //         liPortfolio1.classList = "listItem";
  //         ulPortfolio.append(liPortfolio1);
  //         let aPortfolio1 = document.createElement("a");
  //         aPortfolio1.innerHTML = "Repo: " + json[0].name;
  //         aPortfolio1.href = json[0].html_url;
  //         let aPortfolio3 = document.createElement("a");
  //         aPortfolio3.href = "https://cornelialh.github.io/battleOfTheBots/";
  //         aPortfolio3.innerHTML = " Hemsidan";
  //         liPortfolio1.append(aPortfolio1, aPortfolio3);

  //         let liPortfolio2 = document.createElement("li");
  //         liPortfolio2.classList = "listItem";
  //         ulPortfolio.append(liPortfolio2);
  //         let aPortfolio2 = document.createElement("a");
  //         aPortfolio2.innerHTML = "Repo: " + json[2].name;
  //         aPortfolio2.href = json[2].html_url;

  //         let aPortfolio4 = document.createElement("a");
  //         aPortfolio4.href = "https://cornelialh.github.io/CV/";
  //         aPortfolio4.innerHTML = " Hemsidan";
  //         liPortfolio2.append(aPortfolio2, aPortfolio4);
  //         // }
  //       } else if (portfolioOpen == true) {
  //         portfolioOpen = false;
  //       }
  //     }
  //   });

  //BANNER
  const bannerQuote = document.createElement("blockquote");
  bannerQuote.classList = "bannerQuote";

  const bannerQuoteText = document.createElement("p");
  bannerQuoteText.classList = "banner__textStretch";
  bannerQuoteText.innerText = `You can't use up creativity,
the more you use, 
the more you have.`;

  const bannerQuoteFooter = document.createElement("footer");
  bannerQuoteFooter.classList = "banner__footerStretch";
  bannerQuoteFooter.innerText = "Maya Angelou";

  containerPage2.append(bannerQuote);
  bannerQuote.append(bannerQuoteText, bannerQuoteFooter);

  //FOOTER

  const footer = document.createElement("footer");
  const footerContainer1 = document.createElement("div");
  footerContainer1.classList = "footerContainer1";
  const footerContainer2 = document.createElement("div");
  footerContainer2.classList = "footerContainer2";

  containerPage2.append(footer);
  footer.append(footerContainer1);
  footerContainer1.append(footerContainer2);

  const footerSocials = document.createElement("section");
  footerSocials.classList = "footer__socials";
  footerSocials.id = "socials";

  let socialsHeader = document.createElement("h2");
  socialsHeader.classList = "header2 socials__text";
  socialsHeader.id = "navlista5";
  socialsHeader.innerText = "- Socialt";

  const socialsList = document.createElement("ul");
  socialsList.classList = "socials__list";

  footerContainer2.append(footerSocials);
  footerSocials.append(socialsHeader, socialsList);

  let arraySocialsLinks = [
    {
      href: "https://www.linkedin.com/in/cornelia-harder-140442222/",
      src: "img/LI-In-Bug.png",
      width: 32,
      height: 27,
      alt: "Linkedin-logo",
    },
    {
      href: "https://www.github.com/CorneliaLH",
      src: "img/GitHub-Mark-32px.png",
      width: 32,
      height: 32,
      alt: "Github-logo",
    },
  ];

  arraySocialsLinks.forEach((element) => {
    const socialsItem = document.createElement("li");
    socialsItem.classList = "socials__links";
    const socialsLink = document.createElement("a");
    socialsLink.href = element.href;
    const imgSocials = document.createElement("img");
    imgSocials.src = element.src;
    imgSocials.width = element.width;
    imgSocials.height = element.height;
    imgSocials.alt = element.alt;
    socialsList.append(socialsItem);
    socialsItem.append(socialsLink);
    socialsLink.append(imgSocials);
  });

  const footerContact = document.createElement("section");
  footerContact.classList = "footer__contact";
  footerContact.id = "contact";

  let contactTitle = document.createElement("h2");
  contactTitle.classList = "header2 contact__text";
  contactTitle.id = "navlista6";
  contactTitle.innerText = "- Kontakt";

  footerContainer2.append(footerContact);
  footerContact.append(contactTitle);

  const contactList = document.createElement("ul");
  contactList.classList = "contact__list";

  const contactItem = document.createElement("li");
  contactItem.classList = "listItem";

  const contactLinks = document.createElement("a");
  contactLinks.classList = "contact__links";
  contactLinks.href = "cornelialisaharder@gmail.com";
  contactLinks.innerText = "E-mail: cornelialisaharder@gmail.com";

  footerContact.append(contactList);
  contactList.append(contactItem);
  contactItem.append(contactLinks);

  const copyright = document.createElement("aside");
  copyright.classList = "aside__text";
  copyright.innerText = "Copyright";
  footer.append(copyright);

  headerLanguageBtn.addEventListener("click", changeLanguage);

  function changeLanguage() {
    headerLanguageBtn.innerText = "Svenska";
    console.log("hej");
    ulNav.innerHTML = "";
    menuArray = [
      "Home",
      "Background",
      "Skills",
      "Work experience",
      "Education",
      "Socials",
      "Contact",
    ];
    for (let i = 0; i < menuArray.length; i++) {
      const liNav = document.createElement("li");
      liNav.classList = "nav__item";
      const aNav = document.createElement("a");
      aNav.classList = "nav__link";
      aNav.href = "#" + "navlista" + [i];
      aNav.innerText = menuArray[i];
      ulNav.append(liNav);
      liNav.append(aNav);
    }
    h1Card.innerText = `Hi, my name is Cornelia,
  I'm studying to 
  become a 
  Front End developer`;

    cardBtnMail.ariaLabel = "Press to send e-mail to Cornelia";
    cardBtnMail.innerText = "E-mail me";

    let cardBtnFont = document.createElement("i");
    cardBtnFont.classList = "card__buttonFont far fa-envelope";
    cardBtnMail.append(cardBtnFont);

    cardImg.alt = "Smiling Cornelia";

    backgroundTitle1.innerText = "- Background";

    backgroundArticleHeader.innerText = "Experience from several areas";
    backgroundParagraph.innerText = `Programming has always been an interest of mine that
     I am now looking forward to having as my profession. I have previously worked as
    an orthodontist and i am now ready for new
    challenges.`;

    skillsTitle1.innerText = "- Skills";
    // skillsArticleHeader.innerText = "I am often described as:";

    // skillsList.innerHTML = "";
    // skillsArray = ["Structured", "Reliable", "Solution-oriented"];
    // skillsArray.forEach((element) => {
    //   const skillsArrayItem = document.createElement("li");
    //   skillsArrayItem.classList = "listItem";
    //   skillsArrayItem.innerText = element;
    //   skillsList.append(skillsArrayItem);
    // });

    educationTitle1.innerText = "- Education";
    educationArticle.innerHTML = "";
    educationArray = [
      {
        title: "Front End developer",
        item1: `Medieinstitutet Yrkeshögskola / From October 2021 and expected graduation
    in May 2023`,
        item2: `The training provides skills to use
        the web technology required to produce advanced
        websites. Everything from JavaScript, version control,
        framework, HTML, CSS, web design and usability / UX.
        The education covers everything from programming languages to
        knowledge in the development of mobile web applications.
      `,
      },
      {
        title: "Postgraduate programme in orhodontics",
        item1: "Copenhagen University / From September 2013 until October 2016",
        item2: `The programme contains scientific and clinical courses 
        complemented by education at different hospital departments and 
        a series of specialist courses. Since the programme is taught 
        mainly in Danish, i have become almost fluent in the Danish 
        language`,
      },
      {
        title: `Dentistry programme`,
        item1: "Malmö university / From October 2005 until juni 2010",
        item2: `The dentistry programme was conducted according to PBL, problem-based
        learning, which means that the studies are based on case studies
        and problem solving.`,
      },
      {
        title: `English A`,
        item1: "Lunds university / From August 2004 until December 2004",
      },
      {
        title: `Introductory Law`,
        item1: "Lund university / From March 2005 until June 2005",
      },
    ];
    educationArray.forEach((element) => {
      const educationArticleHeader = document.createElement("h3");
      educationArticleHeader.classList = "header3 articleEducation__title";
      educationArticleHeader.innerText = element.title;
      educationArticle.append(educationArticleHeader);

      const educationList = document.createElement("ul");
      educationList.classList = "article__list";
      educationArticle.append(educationList);

      const educationListItem1 = document.createElement("li");
      educationListItem1.classList = "listItem";
      educationListItem1.innerText = element.item1;

      const educationListItem2 = document.createElement("li");
      educationListItem2.classList = "listItem";
      educationListItem2.innerText = element.item2;

      educationList.append(educationListItem1);

      if (element.item2 != undefined) {
        educationList.append(educationListItem2);
      }
    });

    workArticle.innerHTML = "";
    workTitle1.innerText = "- Work experience";
    workArray = [
      {
        title: "Workplace: Copenhagen Municipality",
        item1: `Orthodontist / From August 2020 until April 2021`,
        item2: `Briefly about the role: The role involves extensive experience of teamwork
        and delegation. Working exclusively with
        orthodontic treatment of children and adolescents. The treatments
        included both removable and fixed appliances
        including treatments with skeletal anchorage.`,
      },
      {
        title: "Workplace: Region Jämtland Härjedalen",
        item1: "Orthodontist / From September 2018 until June 2020",
        item2: `Briefly about the role: Gained more experience of treatment with fixed appliances
        and with skeletal anchorage. I was also a supervisor
        for our dental hygienist in her thesis to
        become a orthodontic assistent.`,
      },
      {
        title: `Frösöstrand public dental care`,
        item1: "Dentist / From September 2010 until June 2013",
        item2: `Briefly about the role: Worked with general dental 
        care for both childern and adults.
        Niche in Orthodontics.`,
      },
    ];
    workArray.forEach((element) => {
      const workArticleHeader = document.createElement("h3");
      workArticleHeader.classList = "header3 articleWork__title";
      workArticleHeader.innerText = element.title;
      workArticle.append(workArticleHeader);

      const workList = document.createElement("ul");
      workList.classList = "article__list";
      workArticle.append(workList);

      const workListItem1 = document.createElement("li");
      workListItem1.classList = "listItem";
      workListItem1.innerText = element.item1;

      const workListItem2 = document.createElement("li");
      workListItem2.classList = "listItem";
      workListItem2.innerText = element.item2;

      workList.append(workListItem1, workListItem2);
    });

    socialsHeader.innerText = "- Socials";
    contactTitle.innerText = "- Contact";
    headerLanguageBtn.addEventListener("click", startSite);
  }
}
