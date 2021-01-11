VAR your_name = "Ben"
VAR fiance_name = "Emilia"

VAR movies = "NONE"
VAR starting_family = 0
VAR difficult = ""
VAR love = ""

//{ your_name }
//{ fiance_name }

// You can’t put a Content Size Fitter on each child. (PAUSE)The reason is that the Content Size Fitter wants control over its own Rect Transform, but the parent Layout Group also wants control over the child Rect Transform. This creates a conflict and the result is undefined behavior.
(NEWLINE) # music:HineEHine
Priest: 'I understand you have prepared your own vows?'
* 'Yes, minister'[], you answer.
- The priest nods.

(NEWLINE)
You begin stating your vows.
(NEWLINE)

You: 'I still remember the first time we met.'
* 'You were wearing a blue dress[]. (PAUSE)I remember believing you were way out of my league.(PAUSE)<> 
    And I still do actually.'
    
* 'You were still in a relationship'
    ** 'I just bade my time. [] I knew I'd get you in the end.'
    ** 'I never would have imagined us standing here together. [] Yet here we are.' 
    
* 'We quickly became friends [] and we quickly discovered we both liked the same kind of movies.'
    ** [campy horror movies] 'What I never admitted to you was that these campy horror movies actually scared me.' 
        ~movies = "horror"
    ** [kung fu movies] 'And we both cried when we watched "Dragon, The Bruce Lee Story".'
        ~movies = "kung_fu"
    ** [art house flicks] 'We spent hours debating pacing and cinematography in those arty European movies.'
        ~movies = "art_house"

- 
(NEWLINE)
You: 'Flash forward a few years and we are talking about (NBSP)<>
* buying a home and starting a family.' 
    ~ starting_family = 1
* travelling around the world.'
- 'It is then that we decided to get married first.'

(NEWLINE)
You: 'Off course, we had our difficult times, like (NBSP)<>
* when your brother died. [] Not only did you have to make all the arrangements, (PAUSE)but I know I felt guilty for being jealous about the bond you two shared.'
    ~difficult = "brother_died"
* when I lost my job. [] It felt like the only thing we talked about was making means end for months.(PAUSE) 
    'And it was your encouragement that convinced me to go back to school and pursue a new career as a (NBSP)<>
        ** programmer.' 
        ** artist.' 
        ** cook.' 
    ~difficult = "lost_job"
* when you got sick. [] No matter how much you love someone. I remember I sometimes felt more like a nurse or doctor than your boyfriend. (PAUSE)<>
    Still, when you were admitted into the hospital, all I was afraid of was losing you.' (PAUSE)
    'And I can't remember feeling closer to you than when I kissed you before you went into surgery.' 
    ~difficult = "sick"

- 
(NEWLINE)
You: 'Finally, I remember the last time I fell in love.'
'It was when (NBSP)<>
* you asked me to dance [] knowing very well that I hated that song. (PAUSE)<>
    I guess the fact that I said yes, was all the information you needed.'
    ~love = "dancing"
* you told me you didn't believe in love at first sight. [] (PAUSE)It was then that I knew you were lying. (PAUSE)And it was then that I somehow was able to resist the urge to challenge you on that and simply kiss you instead.' 
    ~love = "love_at_first_sight"
* I was driving home [] and I saw that falling star.'
    'I saw that star and somehow started thinking about you.'
    'And I remember thinking "that's not a normal response."'
    'It is then that I realised I was in love with you.'
    ~love = "falling_star"

- 
(PAUSE)
(NEWLINE)
You look from you fiancé to the priest to signal that you are finished.
(PAUSE)
* [Look at fiancé]
- You then look back at your fiancé. 
(NEWLINE)

// Then she responds (based on your answers)
{fiance_name}: 'I too remember the first time we met. Somehow, I knew we would be together the day that we met.'
{ movies == "NONE":
-else: And who would have guessed that {movies} movies could be so romantic?'
}
(PAUSE)
(NEWLINE)
{fiance_name}: 'I know you love me very much.'
{love == "dancing": 'The real test for me was to see whether you would dance with me to that awful country song.'}
{love == "love_at_first_sight": 'That's exactly why I told you I didn't believe in love at first sight.'}
{love == "falling_star": 'And after all this time, you still surprise me. You never told about that falling star. You always told me that shooting stars were just rocks millions of kilometers away.'}
(PAUSE)
(NEWLINE)
{fiance_name}: 'However, that was not when I decided I wanted to marry you.'
'I believe you can get to know somebody in the good times, but it was in the difficult times that we really got to know eachother.'
{difficult == "brother_died": 'I promised myself I would not cry, but I can't help it everytime I think of him. (PAUSE)It is then that you were really there for me. (PAUSE)It must not have been easy, with me talking about another guy all the time. Even if he was my brother.' }
{difficult == "lost_job": 'You were so depressed when you lost your job. For me it meant, you finally got a kick in the butt to pursue your actual talents.' } 
{difficult == "sick": 'The doctors say it was a close call, but I know it was because of wanting to be with you that kept me in this world.'}
(PAUSE)
(NEWLINE)
{fiance_name}: 'I know getting married sets expectations.' 
{starting_family > 0:'I'm glad you look forward to starting a family as well. Because, we might have an extra family member, sooner than you think.'} 
{starting_family == 0: 'I didn't bring it up sooner because I wanted it to be a surprise. (PAUSE)But perhaps we should postpone that trip around the world. (NEWLINE)You are going to be a father!'' }
(PAUSE)
(NEWLINE)
{fiance_name}: 'And it's for these and millions of reasons more, that I today want to become your wife.'
(NEWLINE)
(PAUSE)
Priest: 'Do you {your_name} take {fiance_name} as you lawfully wedded wife?'
* [I do] You: 'I do'
- Priest: 'And do you {fiance_name} take {your_name} as your lawfully wedded husband?'
{fiance_name}: 'I do'
- 
(PAUSE) # music:WeddingMarch
Priest: 'Then I now pronounce you husband and wife!' 
* [Kiss the bride] You kiss {fiance_name}.
- 
(NEWLINE)
From that moment, it didn't take long for your first child to arrive. You are now proud as a father. And tired. And even though you sometimes wonder what would have happened if you made different choices in life, you remain happy as you realise that would mean you would have lost everything that really mattered to you.
(PAUSE)
Thank you for playing. 
-> END