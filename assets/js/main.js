/*
  Future Imperfect by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $menu = $("#menu"),
    $sidebar = $("#sidebar"),
    $main = $("#main");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Menu.
  $menu.appendTo($body).panel({
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: "right",
    target: $body,
    visibleClass: "is-menu-visible",
  });

  // Search (header).
  var $search = $("#search"),
    $search_input = $search.find("input");

  $body.on("click", '[href="#search"]', function (event) {
    event.preventDefault();

    // Not visible?
    if (!$search.hasClass("visible")) {
      // Reset form.
      $search[0].reset();

      // Show.
      $search.addClass("visible");

      // Focus input.
      $search_input.focus();
    }
  });

  $search_input
    .on("keydown", function (event) {
      if (event.keyCode == 27) $search_input.blur();
    })
    .on("blur", function () {
      window.setTimeout(function () {
        $search.removeClass("visible");
      }, 100);
    });

  // Intro.
  var $intro = $("#intro");

  // Move to main on <=large, back to sidebar on >large.
  breakpoints.on("<=large", function () {
    $intro.prependTo($main);
  });

  breakpoints.on(">large", function () {
    $intro.prependTo($sidebar);
  });
})(jQuery);


///ISPIS ZA NAVIGACIJU

////ISPIS ZA NAVIGACIJU (Responsive)
let responsiveLinks = new Array("Početna", "O Autoru", "Kontakt");
let responsiveLinksDescription = new Array(
  "Ovo je  Početna strana",
  "Ovo je strana o Autoru",
  "Ovo je kontakt strana"
);

let links = document.querySelector("#responsiveLinks");
let ispis2 = "";
for (let i = 0; i < responsiveLinks.length; i++) {
  ispis2 += `
	<li>
			<a href="${navigationLink[i]}">
				<h3>${responsiveLinks[i]}</h3>
				<p>${responsiveLinksDescription[i]}</p>
			</a>
	</li>
	`;
}
links.innerHTML = ispis2;

////ISPIS POSTOVA
//NIZOVI ZA POST ISPIS

let hrefLinks = new Array(
  "firstPost.html",
  "secondPost.html",
  "thirdPost.html"
);
let h2Content = new Array("KOMPJUTERI", "PROGRAMIRANJE", "RUDARENJE");
let headerPContent = new Array("Ukratko o kompjuterima", "Ukratko o programiranju", "Neštoo rudarenju");

var datum = new Date();
let godina = datum.getFullYear();
let mesec = datum.getMonth() + 1;
let dan = datum.getDate();

let dateTime = new Array(
  godina + " - " + mesec + " - " + dan,
  godina + " - " + (mesec - 1) + " - " + (1 + dan),
  godina + " - " + (mesec - 3) + " - " + (dan - 16)
);

let authors = new Array("Sara", "Robert", "Aya");
let avatarImg = new Array(
  "images/avatar1.jpg",
  "images/avatar2.jpg",
  "images/avatar3.jpg"
);
let avatarImgAltTag = new Array("Sara", "Robert", "Aya");

let postImg = new Array(
  "images/Optimized-picture.jpg",
  "images/Optimized-programing.jpg",
  "images/Optimized-electronics.jpg"
);
let postImgAltTag = new Array("COMPUTER", "PROGRAMING", "ELECTRONICS");
let postPTagContent = new Array(
  'Računar ili kompjuter je elektronski uređaj koji se koristi za unos, obradu, spremanje i dijeljenje podataka prema strogo određenoj proceduri. U engleskom jeziku reč computer se izvorno koristila za ljude zaposlene da obavljaju aritmetičke proračune, sa ili bez mehaničkih pomagala, ali je kasnije korišćena za same računske mašine. Isto važi i za srpsku reč računar.',
  "Programiranje je značajna komponenta, prisutna u gotovo svim granama računarstva.  Često izjednačavanje računarske nauke sa programiranjem zanemaruje druge bitne aspekte računarstva kao što su projektovanje hardvera, arhitektura sistema, projektovanje nivoa operativnih sistema, struktuiranje baza podataka za specifične aplikacije, validacije modela, itd. Programiranje je  u najopštijem smislu aktivnost izrade programa za elektronsku  računsku  mašinu (računar). ",
  " Kriptovaluta je oblik digitalne imovine koja se koristi kao sredstvo razmene koristeći kriptografiju (kriptografija) kao način obozbeđivanja sigurnosti transakcija, kontrole stvaranja dodatnih novčanih jedinica i radi potvrde transfera valute."
);

let footerSocialContent1 = new Array(100, 40, 35);
let footerSocialContent2 = new Array(20, 48, 65);

//NIZOVI ZA MINI-POST ISPIS
//HEADER MINI POSTA HREF I OPIS
let miniHref = new Array(
  "single.html",
  "single.html",
  "single.html",
  "single.html"
);
let h3Opis = new Array(
  "ETHERIUM",
  "BITCOIN",
  "Z-Cash",
  "Robots in production"
);
//SLIKA MINI POSTA HREF<ALT I SRC-AUTORA
let authorMiniHref = new Array("#", "#", "#", "#");
let avatarImgMini = new Array(
  "images/man1.jpg",
  "images/man2.jpg",
  "images/woman1.jpg",
  "images/woman2.jpg"
);
let avatarImgAltMini = new Array("Aslan", "Johny", "Jenny", "Sia");

//MINI POSTA
let imgHref = new Array(
  "https://hr.wikipedia.org/wiki/Ethereum",
  "https://sh.wikipedia.org/wiki/Bitcoin",
  "https://en.wikipedia.org/wiki/Zcash",
  "https://en.wikipedia.org/wiki/Litecoin"
);
let imgImg = new Array(
  "images/download1.jfif",
  "images/btc.jfif",
  "images/zch.jfif",
  "images/litech.jfif"
);
let imgImgAlt = new Array(
  "etherium",
  "bitcoin",
  "z-cash",
  "lite cash"
);
//DATUM MINI POSTA
var datumMini = new Date();
let godinaMini = datumMini.getFullYear();
let mesecMini = datumMini.getMonth() + 1;
let danMini = datumMini.getDate();

let dateTimeMini = new Array(
  godinaMini + " - " + mesecMini + " - " + danMini,
  godinaMini + " - " + (mesecMini - 1) + " - " + (1 + danMini),
  godinaMini + " - " + (mesecMini - 3) + " - " + (danMini - 16),
  godinaMini + " - " + (mesecMini - 5) + " - " + (danMini - 14)
);
//ISPIS
try {
  let mainPost = document.querySelector("#main");
  let ispis3 = "";

  for (let i = 0; i < h2Content.length; i++) {
    ispis3 += `
		<article class="post">
		<header>
			<div class="title">
				<h2><a href="${hrefLinks[i]}">${h2Content[i]}</a></h2>
				<p>${headerPContent[i]}</p>
			</div>
	
			<div class="meta">
				<time class="published" datetime="${dateTime[i]}">${dateTime[i]}</time>
				<a href="#" class="author"><span class="name">${authors[i]}</span><img src="${avatarImg[i]}" alt="${avatarImgAltTag[i]}" /></a>
			</div>
		</header>
	
		<a href="${hrefLinks[i]}" class="image featured"><img src="${postImg[i]}" alt="${postImgAltTag[i]}" /></a>
		<p>${postPTagContent[i]}</p>
	
		<footer>
			<ul class="actions">
					<li><a href="${hrefLinks[i]}" class="button large">Čitaj dalje</a></li>
			</ul>
			<ul class="stats" id='footerPost'>
				<li><a href="#">General</a></li>
				<li><a href="#" class="icon solid fa-heart">${footerSocialContent1[i]}</a></li>
				<li><a href="#" class="icon solid fa-comment">${footerSocialContent2[i]}</a></li>
			</ul>
		</footer>
		</article>
		`;
  }
  mainPost.innerHTML = ispis3;

  ///ISPIS MINI POSTOVA

  let miniPost = document.querySelector("#mini");
  let ispis4 = "";
  for (let i = 0; i < imgImgAlt.length; i++) {
    ispis4 += `
		<article class="mini-post" class="mini">
			<header>
					<h3><a href="${miniHref[i]}">${h3Opis[i]}</a></h3>
					<time class="published" datetime="${dateTimeMini[i]}">${dateTimeMini[i]}</time>
					<a href="${authorMiniHref[i]}" class="author"><img src="${avatarImgMini[i]}" alt="${avatarImgAltMini[i]}" /></a>
			</header>
			<a href="${imgHref[i]}" class="image"><img src="${imgImg[i]}" alt="${imgImgAlt[i]}" /></a>
		</article>
		`;
  }
  miniPost.innerHTML = ispis4;
} catch (e) { }
let pTagSinge = new Array(
  "Računar ili kompjuter je elektronski uređaj koji se koristi za unos, obradu, spremanje i deljenje podataka prema strogo određenoj proceduri. U engleskom jeziku reč computer se izvorno koristila za ljude zaposlene da obavljaju aritmetičke proračune, sa ili bez mehaničkih pomagala, ali je kasnije korišćena za same računske mašine. Isto važi i za srpsku reč računar.Isprva, obrada informacija na računarima je bila ograničena isključivo na aritmetičke probleme, ali savremeni računari se koriste za mnoge zadatke nevezane za matematiku. Ova definicija obuhvata mehaničke uređaje kao što je šiber, razne mehaničke računaljke od abakusa nadalje, kao i sve savremene elektronske računare.Prvi elektronski računar je napravljen između 1940. i 1945. u Ujedinjenom Kraljevstvu i Sjedinjenim Američkim Državama. Izvorno su bili veličine velike sobe, konzumiranje što više snage kao nekoliko stotina modernih ličnih računara (PC). Korišćeni su bili za vojne namene.Postoji podela na analogne i digitalne računare sa obzirom na to da li rade sa kontinualnim ili diskretnim veličinama pri obradi podataka. Vremenom je analogni računar uglavnom potisnut iz upotrebe, izumro pa se danas pojam računar uglavnom odnosi na digitalni računar.Veliki centralni računari (mejnfrejmovi)Gotovo istovremeno su uvedeni udaljeni (tzv. „glupi“) terminali koji su imali monitor i tastaturu za unos podataka u jednom kućištu ali se obrada podataka i dalje obavljala u glavnom (i jedinom) računaru (engl. Mainframe).Kasnije su se pojavili i „inteligentni“ terminali koji su deo operacija mogli da obavljaju sami. Vikipedija, danas, je u elektronskom smislu organizovana na sličan način – glavni računar je u SAD a inteligenti terminali (PC računari) kod korisnika. Internet ima ulogu „mreže“.",
  "Programiranje je značajna komponenta, prisutna u gotovo svim granama računarstva.  Često izjednačavanje računarske nauke sa programiranjem zanemaruje druge bitne aspekte računarstva kao što su projektovanje hardvera, arhitektura sistema, projektovanje nivoa operativnih sistema, struktuiranje baza podataka za specifične aplikacije, validacije modela, itd. Programiranje je  u najopštijem smislu aktivnost izrade programa za elektronsku  računsku  mašinu (računar). Programiranje, pored izučavanja važnih klasa algoritama i programa  koji se, kao česte komponente drugih programa mogu primmeniti u rešavanju novih zadataka, mora da uključi i metode razvoja algoritama i programa sa unapred poznatim ponašanjem, tj. Metode koje omogućuju da se, zajedno sa izvođenjem programa izvodi  i dokaz njegove korektnosti (njegova semantika), što približava razvoj programa dokazu teoreme u matematici.Ponašanje programa sada se izvodi  iz samog teksta programa, bez interpretacije izvršnog koda, tj. bez  testiranja. Poslednjih decenija, programski sistemi kod kojih je kritična bezbednost  (npr. kontrola leta), razvijaju se upravo korišćenjem ovakvih metoda. One (za razliku od testiranja) mogu egzaktno  da dokažu  korektnost programa, ali i da pomognu  u otkrivanju eventualnih grešaka.",
  "Kriptovaluta je oblik digitalne imovine koja se koristi kao sredstvo razmene koristeći kriptografiju (kriptografija) kao način obozbeđivanja sigurnosti transakcija, kontrole stvaranja dodatnih novčanih jedinica i radi potvrde transfera valute.Kriptovalute se definišu kao podskup digitalnih valuta, alternativnih valuta i virtuelnih valuta.Bilo je mnogo pokušaja da se stvori digitalna valuta tokom tehnološkog buma 90-ih, sa sistemima kao što su Flooz, Beenz i DigiKeš koji se pojavljuju na tržištu, ali neizbežno ne uspevaju. Bilo je mnogo različitih razloga za njihove propuste, kao što su prevara, finansijski problemi i čak sukobi između zaposlenih u kompanijama i njihovih šefova.Značajno, svi ovi sistemi su koristili Trusted Third Party (posrednik od poverenja)pristup, što znači da su kompanije iza njih verifikovale i omogućile transakcije. Zbog neuspeha ovih kompanija, stvaranje digitalnog sistema gotovog novca je dugo vremena smatrano izgubljenim slučajem.Zatim, početkom 2009, anonimni programer ili grupa programera pod pseudonimom Satoši Nakamoto predstavio je bitkoin. Satoši je to opisao kao peer-to-peer elektronski keš sistem. Potpuno je decentralizovan, što znači da nema uključenih servera i nema centralnog kontrolnog autoriteta. Koncept blisko podseća na peer-to-peer (bez posrednika) mreže za deljenje datoteka.Jedan od najvažnijih problema koji mreža za plaćanje mora rešiti je dvostruko trošenje (double spending). To je manipulatorska tehnika dvostruke potrošnje iste količine. Tradicionalno rešenje je bila pouzdana treća strana - centralni server - koji je vodio evidencije o balansima i transakcijama. Međutim, ovaj metod podrazumeva nadležnost nad vašim sredstvima i svim vašim ličnim podacima. Logo Kriptovaluta U decentralizovanoj mreži kao bitkoin, svaki učesnik mora da radi ovaj posao. Ovo se obavlja preko blokčeina–javnog registra svake transakcije koja se ikada dogodila unutar mreže, dostupnog svima. Prema tome, svi u mreži mogu da vide bilans svakog računa. Svaka transakcija je datoteka koja se sastoji od javnih ključeva pošiljaoca i primaoca (adrese novčanika) i količine prenesenih novčića. Transakciju takođe mora potpisati pošiljalac sa svojim privatnim ključem. Sve ovo je samo osnovna kriptografija. Na kraju, transakcija se emituje u mreži, ali prvo treba da se potvrdi.U okviru kriptovalutne mreže, samo rudari mogu potvrditi transakcije rešavajući kriptografsku slagalicu. Oni preuzimaju transakcije, označavaju ih legitimnim i šire preko mreže. Nakon toga, svaki nodih dodaje u svoju bazu podataka. Kada se transakcija verifikuje postaje nepopravljiva i nepovratna, a rudar dobija nagradu, plus naknade za transakciju.U osnovi, bilo koja kriptovalutna mreža zasniva se na apsolutnom konsenzusu svih učesnika u pogledu legitimiteta bilansa i transakcija. Ako se nodovi ne slažu na jednom bilansu, sistem bi se u osnovi raspao. Međutim, postoji puno pravila unapred izgrađenih i programiranih u mreži koja sprečava da se ovo dogodi.”Majnovanje” kriptovaluta Kriptovalute su tako nazvane jer jekonsenzus mehanizam osiguran snažnom kriptografijom. Ovo, zajedno sa navedenim faktorima, čini treće strane i „blanko poverenje“ kao koncept, potpuno neujednačene."
);
//ISPIS SINGLE POSTA-1
try {
  let post1 = document.querySelector("#post-1");
  let i = 0;
  post1.innerHTML = `
	<article class="post">
	<header>
		<div class="title">
			<h2><a href="${hrefLinks[i]}">${h2Content[i]}</a></h2>
			<p>${headerPContent[i]}</p>
		</div>
	
		<div class="meta">
			<time class="published" datetime="${dateTime[i]}">${dateTime[i]}</time>
			<a href="#" class="author"><span class="name">${authors[i]}</span><img src="${avatarImg[i]}" alt="${avatarImgAltTag[i]}" /></a>
		</div>
	</header>
	
	<a href="${hrefLinks[i]}" class="image featured"><img src="${postImg[i]}" alt="${postImgAltTag[i]}" /></a>
	<p>${pTagSinge[i]}</p>
	
	<footer>
		
		<ul class="stats" id='footerPost'>
			<li><a href="#">General</a></li>
			<li><a href="#" class="icon solid fa-heart">${footerSocialContent1[i]}</a></li>
			<li><a href="#" class="icon solid fa-comment">${footerSocialContent2[i]}</a></li>
		</ul>
	</footer>
	</article>
	`;
} catch (e) { }

//ISPIS SINGLE POSTA-2

try {
  let post2 = document.querySelector("#post-2");
  let i = 1;
  post2.innerHTML = `
	<article class="post">
	<header>
		<div class="title">
			<h2><a href="${hrefLinks[i]}">${h2Content[i]}</a></h2>
			<p>${headerPContent[i]}</p>
		</div>
	
		<div class="meta">
			<time class="published" datetime="${dateTime[i]}">${dateTime[i]}</time>
			<a href="#" class="author"><span class="name">${authors[i]}</span><img src="${avatarImg[i]}" alt="${avatarImgAltTag[i]}" /></a>
		</div>
	</header>
	
	<a href="${hrefLinks[i]}" class="image featured"><img src="${postImg[i]}" alt="${postImgAltTag[i]}" /></a>
	<p>${pTagSinge[i]}</p>
	
	<footer>
		
		<ul class="stats" id='footerPost'>
			<li><a href="#">General</a></li>
			<li><a href="#" class="icon solid fa-heart">${footerSocialContent1[i]}</a></li>
			<li><a href="#" class="icon solid fa-comment">${footerSocialContent2[i]}</a></li>
		</ul>
	</footer>
	</article>
	`;
} catch (e) { }

//ISPIS SINGLE POSTA-3

try {
  let post3 = document.querySelector("#post-3");
  let i = 2;
  post3.innerHTML = `
	<article class="post">
	<header>
		<div class="title">
			<h2><a href="${hrefLinks[i]}">${h2Content[i]}</a></h2>
			<p>${headerPContent[i]}</p>
		</div>
	
		<div class="meta">
			<time class="published" datetime="${dateTime[i]}">${dateTime[i]}</time>
			<a href="#" class="author"><span class="name">${authors[i]}</span><img src="${avatarImg[i]}" alt="${avatarImgAltTag[i]}" /></a>
		</div>
	</header>
	
	<a href="${hrefLinks[i]}" class="image featured"><img src="${postImg[i]}" alt="${postImgAltTag[i]}" /></a>
	<p>${pTagSinge[i]}</p>
	
	<footer>
		
		<ul class="stats" id='footerPost'>
			<li><a href="#">General</a></li>
			<li><a href="#" class="icon solid fa-heart">${footerSocialContent1[i]}</a></li>
			<li><a href="#" class="icon solid fa-comment">${footerSocialContent2[i]}</a></li>
		</ul>
	</footer>
	</article>
	`;
} catch (e) { }

/// posle mini postova
let hrefNiz = new Array(
  "https://gigatron.rs/racunari-i-komponente/komponente/napajanja",
  "https://gigatron.rs/akcije/samo-je-legalan-softver-dovoljno-bezbedan-5383",
  "https://gigatron.rs/racunari-i-komponente/komponente/procesori",
  "https://gigatron.rs/racunari-i-komponente/komponente/maticne-ploce",
  "https://gigatron.rs/racunari-i-komponente/komponente/graficke-karte"
);
let h3ZaSliku = new Array(
  "Napajanje",
  "Softver",
  "Procesor",
  "Matična ploča",
  "Grafičke karte"
);
let hrefZaSliku = new Array("https://gigatron.rs/racunari-i-komponente/komponente/napajanja", "https://gigatron.rs/akcije/samo-je-legalan-softver-dovoljno-bezbedan-5383", "https://gigatron.rs/racunari-i-komponente/komponente/procesori", "https://gigatron.rs/racunari-i-komponente/komponente/maticne-ploce", "https://gigatron.rs/racunari-i-komponente/komponente/graficke-karte");
let srcSlika = new Array(
  "images/hardware.jpg",
  "images/software.jpg",
  "images/procesor.jpg",
  "images/plocamat.jpg",
  "images/graficka.jpg"
);
let altSlika = new Array("hardver", "softver", "#", "#", "#");

var datum1 = new Date();
let godina1 = datum1.getFullYear();
let mesec1 = datum1.getMonth() + 1;
let dan1 = datum1.getDate();

let dateTime1 = new Array(
  godinaMini + " - " + mesecMini + " - " + danMini,
  godinaMini + " - " + (mesecMini - 1) + " - " + (1 + danMini),
  godinaMini + " - " + (mesecMini - 3) + " - " + (danMini - 16),
  godinaMini + " - " + (mesecMini - 5) + " - " + (danMini - 14),
  godinaMini + " - " + (mesecMini - 6) + " - " + (danMini - 12)
);
try {
  let posts1 = document.querySelector(".posts");
  let ispis5 = " ";
  for (let i = 0; i < h3ZaSliku.length; i++) {
    ispis5 += `
	<li>
	<article>
		<header>
			<h3><a href="${hrefNiz[i]}">${h3ZaSliku[i]}</a></h3>
			<time class="published" datetime="${dateTime1[i]}">${dateTime1[i]}</time>
		</header>
	<a href="${hrefZaSliku[i]}" class="image"><img src="${srcSlika[i]}" alt="${altSlika[i]}" /></a>
	</article>
</li>
	`;
  }
  posts1.innerHTML = ispis5;
} catch (e) { }
try {
  //FORME REG EX

  let provera = document.querySelector("#provera");

  provera.addEventListener("click", proveri);

  function proveri() {
    //RegEx Ime
    let firstName = document.querySelector("#fname");
    let regFirstName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14})*$/;

    if (regFirstName.test(firstName.value)) {
      firstName.nextElementSibling.classList.add("correct");
      firstName.nextElementSibling.innerHTML = "Valid entry";
    } else {
      firstName.nextElementSibling.classList.remove("correct");
      firstName.nextElementSibling.classList.add("mistake");
      firstName.nextElementSibling.innerHTML =
        "The first letter must be uppercase and the name can only contain letters.";
    }

    //RegEx Prezime
    let lastName = document.querySelector("#lname");
    let regLastName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14})*$/;

    if (regLastName.test(lastName.value)) {
      lastName.nextElementSibling.classList.add("correct");
      lastName.nextElementSibling.innerHTML = "Valid entry";
    } else {
      lastName.nextElementSibling.classList.remove("correct");
      lastName.nextElementSibling.classList.add("mistake");
      lastName.nextElementSibling.innerHTML =
        "The first letter must be uppercase and the name can only contain letters.";
    }

    //RegEx Email
    let email = document.querySelector("#email");
    let regEmail = /^[a-z][\d\w\.]*\@[a-z]{3,}(\.[a-z]{2,4}){1,3}$/;

    if (regEmail.test(email.value)) {
      email.nextElementSibling.classList.add("correct");
      email.nextElementSibling.innerHTML = "Valid entry";
    } else {
      email.nextElementSibling.classList.remove("correct");
      email.nextElementSibling.classList.add("mistake");
      email.nextElementSibling.innerHTML = `Format:</br>example.example@example.eg`;
    }

    let topic = document.querySelector("#topic");

    if (topic.selectedIndex != 0) {
      topic.nextElementSibling.classList.add("correct");
      topic.nextElementSibling.innerHTML = "Valid entry";
    } else {
      topic.nextElementSibling.classList.remove("correct");
      topic.nextElementSibling.classList.add("mistake");
      topic.nextElementSibling.innerHTML = "Select valid option";
    }
  }
}
catch (e) { }

try {
  let logProvera = document.querySelectorAll("#logIn");
  logProvera[0].addEventListener("click", logProveri);
  logProvera[1].addEventListener('click', logProveri2)

  function logProveri() {
    //USERNAME
    let uName = document.querySelector("#uName");

    let regUname = /^[A-Za-z](\d?\.?\w?)*?/;


    if (regUname.test(uName.value)) {
      uName.nextElementSibling.classList.add("correct");
      uName.nextElementSibling.innerHTML = "Valid entry";
    } else {
      uName.nextElementSibling.classList.remove("correct");
      uName.nextElementSibling.classList.add("mistake");
      uName.nextElementSibling.innerHTML = `Can have uppercase, lowercase and digit`;
    }

    //PASSWORD
    let pass = document.querySelector("#Password");

    let regPass = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

    if (regPass.test(pass.value)) {
      pass.nextElementSibling.classList.add("correct");
      pass.nextElementSibling.innerHTML = "Valid entry";
    } else {
      pass.nextElementSibling.classList.remove("correct");
      pass.nextElementSibling.classList.add("mistake");
      pass.nextElementSibling.innerHTML = `One uppercase, one lowercase and one digit`;
    }
  }

  function logProveri2() {
    //USERNAME
    let uName2 = document.querySelector("#uName2");

    let regUname = /^[A-Za-z](\d?\.?\w?)*?/;



    if (regUname.test(uName2.value)) {
      uName2.nextElementSibling.classList.add("correct");
      uName2.nextElementSibling.innerHTML = "Valid entry";
    } else {
      uName2.nextElementSibling.classList.remove("correct");
      uName2.nextElementSibling.classList.add("mistake");
      uName2.nextElementSibling.innerHTML = `Can have uppercase, lowercase and digit`;
    }

    //PASSWORD
    let pass2 = document.querySelector("#Password2");

    let regPass = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;


    if (regPass.test(pass2.value)) {
      pass2.nextElementSibling.classList.add("correct");
      pass2.nextElementSibling.innerHTML = "Valid entry";
    } else {
      pass2.nextElementSibling.classList.remove("correct");
      pass2.nextElementSibling.classList.add("mistake");
      pass2.nextElementSibling.innerHTML = `One uppercase, one lowercase and one digit`;
    }
  }
}
catch (e) { }


try {
  let provera = document.querySelector("#provera");

  provera.addEventListener("blur", proveri);

  function proveri() {

    //RegEx Email
    let email = document.querySelector("#emailM");
    let regEmail = /^[a-z][\d\w\.]*\@[a-z]{3,}(\.[a-z]{2,4}){1,3}$/;

    if (regEmail.test(email.value)) {
      email.nextElementSibling.classList.add("correct");
      email.nextElementSibling.innerHTML = "Valid entry";
      console.log("ok");
    } else {
      email.nextElementSibling.classList.remove("correct");
      email.nextElementSibling.classList.add("mistake");
      email.nextElementSibling.innerHTML = `Format:</br>example.example@example.eg`;
      console.log("bad");
    }
  }
}
catch (Exception) { }
