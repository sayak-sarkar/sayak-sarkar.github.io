function localize(lang)
{
	var blog, career, laboratory, name, tagline, title;

	en= 	{	// le localized strings for English.
			blog:		"Blog",
			career:		"Career",
			laboratory:	"Laboratory",
			language:	"Language",
			name: 		"Sayak Sarkar",
			tagline:	"Yet another Pseudo-Geek",
			title:		"Welcome to the Bugsmith's Web Abode!"
	},

	bn=	{	// le localized strings for Bengali.
			blog:		"ব্লগ",
			career:		"কর্মজীবন",
			laboratory:	"গবেষণাগার",
			language:	"ভাষা",
			name: 		"সায়ক সরকার",
			tagline:	"একজন উন্মাদ নিশাচড়।",
			title:		"বাগস্মীথের ওয়েব বাসস্থানে স্বাগতম!"
	},

	hi=	{	// le localized strings for Hindi.
			blog:		"ब्लॉग",
			career:		"कैरियर",
			laboratory:	"प्रयोगशाला",
			language:	"भाषा",
			name: 		"सायक सरकार",
			tagline:	"मानव के रूप में एक गुप्त रोबोट!",
			title:		"बगस्मित की वेब निवास में आपका स्वागत है!"
	}

	blog=eval(lang).blog;
	career=eval(lang).career;
	laboratory=eval(lang).laboratory;
	language=eval(lang).language;
	name=eval(lang).name;
	tagline=eval(lang).tagline;
	title=eval(lang).title;

	document.getElementById("name").innerHTML=name;
	document.getElementById("tagline").innerHTML=tagline;
	document.getElementById("blog").innerHTML=blog;
	document.getElementById("career").innerHTML=career;
	document.getElementById("laboratory").innerHTML=laboratory;
	document.getElementById("language").innerHTML=language;
	document.getElementById("title").innerHTML=title;
}

