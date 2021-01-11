(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"da61e3a8562dac29c1305e31c6b620bd-7.html":"It’s been quiet on the blog, but not on the development side of Shooter, which is now named “Zen BWV”\n\nA few of the changes:\n\n\t•\tThe game has a name! ","3800de3107a38d3a56b851761860016f-4.html":"I’ve been quietly hammering away at the core RPG systems:\n\n\t•\tCombat;\n\t•\tStatistics (i.e. levelling up);\n\t•\tEncounters\/boss fights.\n\nLets take sneak p","ee5ca6d9c50d9442170c147dcb136aba-10.html":"Let’s talk about what makes the main game loop work. As a refresher: the main game loop is move forward, dodge projectiles, shoot incoming starships, ","c128d058e283212a293601080676a360-11.html":"Last week showed very little progress because of family engagements eating away at development time. So I thought I’d take this moment to look back a ","f53a36c520dcf947beddef12d5eeaaed-5.html":"Wow, its been a very long time since the last update!\n\nBut that does not mean that I’ve been sitting around quietly doing nothing. I’ve made quite som","archive-january-2019.html":"Archives for January 2019","archive-october-2019.html":"Archives for October 2019","category-zen-bwv.html":"A list of posts in category &ldquo;Zen BWV&rdquo;","archive-june-2019.html":"Archives for June 2019","12361fa447c664c162384812891bb0da-15.html":"The results for Ludum Dare are in, and I didn't do too well:\n\n￼\n(These stats are from ldstats.info - they help give a better idea about how well you p","category-sw.html":"A list of posts in category &ldquo;Sw&rdquo;","cebc7e2a5edc78f025f591c34eb3f089-2.html":"Yes, it’s been quiet on this blog. But for good reason. It’s also quiet in SPACE. And that’s what I’ve been working on.\n\nWhile I hammer away at the RP","70b27a770d8e4bc572694d6d9f0fc020-12.html":"Welcome to [Shooter] (working title). the game I’m currently developing in my spare time. And welcome to this blog which I use to give some insight in","category-hexengine.html":"A list of posts in category &ldquo;HexEngine&rdquo;","archive-september-2018.html":"Archives for September 2018","e913f279022a4b1a73abd9ed57ab3dae-19.html":"Interactive Fiction, Ink and Unity. Where to begin? And where to end?","category-vapor.html":"A list of posts in category &ldquo;Vapor&rdquo;","category-space-sim.html":"A list of posts in category &ldquo;Space Sim&rdquo;","archive-july-2018.html":"Archives for July 2018","4550a51525c9c2a44d04ac24761e9f71-24.html":"What if you want to generate random numbers, in a deterministic way and be able to restore the RNGs state? Maybe rolling your own using a hash functio","archive-january-2021.html":"Archives for January 2021","archive-december-2017.html":"Archives for December 2017","category-ludum-dare.html":"A list of posts in category &ldquo;Ludum Dare&rdquo;","category-docker.html":"A list of posts in category &ldquo;Docker&rdquo;","swiftui-for-spritekit-games.html":"Update 2020-06-23: in Xcode 12, Apple introduced a native solution for integrating SpriteKit and SwiftUI. Learn more here: https:\/\/www.hackingwithswif","65809d1ba21f44a8d31d35dd38a9c6cd-17.html":"GameplayKit is an Apple provided SDK that contains among others an easy-to-use Entity-Component system. I'm using it in a Roguelike I'm working on in ","archive-august-2018.html":"Archives for August 2018","archive-december-2019.html":"Archives for December 2019","2b9cbe228c6d5448b84ded21641c5a71-9.html":"Lets discuss our enemies “AI”. AI between parentheses because you can’t really call them smart. They are not intent to anyway. They are intent to be p","archive-march-2017.html":"Archives for March 2017","category-swift.html":"A list of posts in category &ldquo;Swift&rdquo;","2b25503094d529e80dd79b8497bfdfd5-16.html":"Last weekend I participated in Alakajam for the first time. The theme was \"Falling\" which I (as well as several others) interpreted as \"Falling in Lov","category-rpg.html":"A list of posts in category &ldquo;RPG&rdquo;","archive-july-2017.html":"Archives for July 2017","archive-april-2020.html":"Archives for April 2020","72680bf954a7bbc267765696525e0849-22.html":"In the post I demonstrated a way of adding Codable conformance to the GameplayKit ECS system. For another game I'm working on (HexEngine, source here:","38872fc59133842767ae359063e16b42-8.html":"There’s not much news about Shooter as\nI’m preparing for Ludum Dare this weekend. If you want to follow progress, follow my Twitter account @maarten_e","57e849f8d2d8708c5af7409d95d83087-14.html":"As the old Ludum Dare site is no longer available, all my past entries are gone as well. That is not a big issue, except for one title for which I'm p","category-spritekit.html":"A list of posts in category &ldquo;SpriteKit&rdquo;","category-cloud.html":"A list of posts in category &ldquo;Cloud&rdquo;","archive-october-2016.html":"Archives for October 2016","fc49f9fdc7928f8ecead7e6003bfa5cb-21.html":"So, you created a nice Vapor app? Or you followed one of many online Vapor tutorials? And you have it running successfully, albeit locally? Now you wa","c10e464565b2439eef0cc266129927aa-0.html":"Years ago I created an experimental multiplayer game using the Unity engine. It couldn’t be simpler:\n\n\t•\tJust control a sphere to try and push the oth","2577589ae2efc5642ad7cd1d8a2e8ebe-3.html":"I created a quick Windows build (macOS to follow) so you can get a feel for RPG progress.\n\nYou can download the build here Windows.\n\nNote: off course,","category-ink.html":"A list of posts in category &ldquo;Ink&rdquo;","321e1c18bd8c9276f8fe74abd2451ce2-1.html":"Last December, I did some experiments with deterministic lockstep technology from Photon – TrueSync.\n\nI now learned that this product is no longer in ","172d0071219446375dff9c7cd9a2e33d-13.html":"Just a quick post mortem of my Ludum Dare 42 entry \"I'm TOTALLY not a clicker!\": the game I made in honour of my collegue at work who hates idle click","category-experiments.html":"A list of posts in category &ldquo;Experiments&rdquo;","archive-january-2017.html":"Archives for January 2017","archive-july-2016.html":"Archives for July 2016","b363d5ffe19f8c3e3ca1e6fad82d5238-6.html":"Now Zen BWV is in alpha, I allow myself time to start thinking about a new project. As Zen BWV was mostly an action game, I’m now working on a more na","category-alakajam.html":"A list of posts in category &ldquo;Alakajam&rdquo;","archive-august-2016.html":"Archives for August 2016","archive-february-2017.html":"Archives for February 2017","archive-october-2018.html":"Archives for October 2018","b7ef2fdcbcd58f3161f84cb2ab86513c-23.html":"Consider a simulation game. The game probably has some entities, wether it's cities, cells, soldiers or reindeer. Now consider it is a turn based game"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();