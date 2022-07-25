import { Injectable } from '@angular/core';
import { IMindMapData } from '../Interfaces/mindmap-interface';
import { BehaviorSubject } from 'rxjs';
import { IHealthData } from '../Interfaces/ihealth-data';

@Injectable({
  providedIn: 'root',
})
export class MindmapService {
  private mockData: IHealthData = {
    id: 'ID_1000991358',
    text: 'Abdominal Pain',
    perform_physical_exam:
      'Abdomen:Scars;Abdomen:Distension;Abdomen:Tenderness;Abdomen:Lumps;Abdomen:Rebound tenderness;Abdomen:Peristaltic sound;Physical Growth:Sexual Maturation;',
    display_or: 'ପେଟଯନ୍ତ୍ରଣା',
    options: [
      {
        id: 'ID_210551359',
        text: 'Site',
        display: 'Which part of the abdomen do you feel pain?',
        display_or: 'କୋଉଯାଗାରେ',
        options: [
          {
            id: 'ID_1935801557',
            text: 'Upper (R) - Right Hypochondrium',
            display_or: 'ଡାହାଣ ଉପରକୁ',
            display_hi: 'ऊपरी (R) – दाहिना हाइपोकॉन्ड्रिअम',
          },
          {
            id: 'ID_845387253',
            text: 'Upper (C) - Epigastric',
            display_or: 'ନାଭି ଉପରକୁ',
            display_hi: 'ऊपरी (C) - एपीगैस्ट्रिक ',
          },
          {
            id: 'ID_1036073432',
            text: 'Upper (L) - Left Hypochondrium',
            display_or: 'ବାମ ଉପରକୁ',
            display_hi: 'ऊपरी (L) बायां हाइपोकॉन्ड्रिअम',
          },
          {
            id: 'ID_568631554',
            text: 'Middle (R) - Right Lumbar',
            display_or: 'ଡ଼ାହାଣ ମଝି',
            display_hi: 'मध्य (R) – दाहिने लम्बर',
          },
          {
            id: 'ID_962169419',
            text: 'Middle (C) - Umbilical',
            display_or: 'ନାଭି ଚାରିକଡ଼େ',
            display_hi: 'मध्य (C) – नाभि (अम्बिलिकल) ',
          },
          {
            id: 'ID_1324037145',
            text: 'Middle (L) - Left Lumbar',
            display_or: 'ବାମ ମଝି',
            display_hi: 'मध्य (L) – बायां लम्बर',
          },
          {
            id: 'ID_1239783765',
            text: 'Lower (R) - Right Illiac Fossa',
            display_or: 'ଡ଼ାହାଣ ତଳ',
            display_hi: 'निम्न (R) – दाहिना इलिएक फोसा ',
          },
          {
            id: 'ID_644410306',
            text: 'Lower (C) - Hypogastric/Suprapubic',
            display_or: 'ନାଭି ତଳକୁ',
            display_hi: 'निम्न (C) – हाइपोगैस्ट्रिक/सुपराप्यूबिक ',
          },
          {
            id: 'ID_562710446',
            text: 'Lower (R) - Left Illiac Fossa',
            display_or: 'ବାମ ତଳ',
            display_hi: 'निम्न (R) – बायां इलिएक फोसा',
          },
          {
            id: 'ID_917293565',
            text: 'All over',
            display_or: 'ଚାରିଅାଡ଼େ',
            display_hi: 'हर तरफ',
          },
        ],
        display_hi: 'पेट के किस भाग में आप दर्द महसूस कर रहे हैं?',
      },
      {
        id: 'ID_334440965',
        text: 'Radiation',
        display: 'Does the pain move to other parts of the body?',
        display_or: 'ଯନ୍ତ୍ରଣା ଅନ୍ୟ ଜାଗା  ଯାଉଛି',
        language: '%',
        options: [
          {
            id: 'ID_1457415162',
            text: 'Does not move',
            language: 'Pain does not radiate',
            display_or: 'ନାହିଁ, ଯଦିହିଁ',
            display_hi: 'नहीं जाता ',
          },
          {
            id: 'ID_1228815375',
            text: 'Pain radiates to',
            display_or: 'ଦରଜ ଗତି କରୁଛି?',
            options: [
              {
                id: 'ID_758995804',
                text: 'Upper (R) - Right Hypochondrium',
                display_or: 'ଡାହାଣ ଉପରକୁ',
                display_hi: 'ऊपरी (R) – दाहिना हाइपोकॉन्ड्रिअम',
              },
              {
                id: 'ID_1252297295',
                text: 'Upper (C) - Epigastric',
                display_or: 'ନାଭି ଉପରକୁ',
                display_hi: 'ऊपरी (C) - एपीगैस्ट्रिक ',
              },
              {
                id: 'ID_498017375',
                text: 'Upper (L) - Left Hypochondrium',
                display_or: 'ବାମ ଉପରକୁ',
                display_hi: 'ऊपरी (L) बायां हाइपोकॉन्ड्रिअम',
              },
              {
                id: 'ID_137477881',
                text: 'Middle (R) - Right Lumbar',
                display_or: 'ଡ଼ାହାଣ ମଝି',
                display_hi: 'मध्य (R) – दाहिने लम्बर',
              },
              {
                id: 'ID_150225290',
                text: 'Middle (C) - Umbilical',
                display_or: 'ନାଭି ଚାରିକଡ଼େ',
                display_hi: 'मध्य (C) – नाभि (अम्बिलिकल) ',
              },
              {
                id: 'ID_1960997639',
                text: 'Middle (L) - Left Lumbar',
                display_or: 'ବାମ ମଝି',
                display_hi: 'मध्य (L) – बायां लम्बर',
              },
              {
                id: 'ID_477522154',
                text: 'Lower (R) - Right Illiac Fossa',
                display_or: 'ଡ଼ାହାଣ ତଳ',
                display_hi: 'निम्न (R) – दाहिना इलिएक फोसा ',
              },
              {
                id: 'ID_1692350292',
                text: 'Lower (C) - Hypogastric/Suprapubic',
                display_or: 'ସମ ନାଭି ତଳକୁ',
                display_hi: 'निम्न (C) – हाइपोगैस्ट्रिक/सुपराप्यूबिक ',
              },
              {
                id: 'ID_1565049622',
                text: 'Lower (R) - Left Illiac Fossa',
                display_or: 'ବାମ ତଳ',
                display_hi: 'निम्न (R) – बायां इलिएक फोसा',
              },
              {
                id: 'ID_622263949',
                text: 'Right shoulder',
                display_or: 'ଡ଼ାହାଣ କାନ୍ଧ',
                display_hi: 'दाहिना कंधा',
              },
              {
                id: 'ID_128266450',
                text: 'Right scapula',
                display_or: 'ଡ଼ାହାଣ ଖୁଅା',
                display_hi: 'दाहिना स्कैपुला',
              },
              {
                id: 'ID_346840033',
                text: 'Groin',
                display_or: 'ଜଘଂ ସନ୍ଧି',
                display_hi: 'उरुमूल (ग्रॉइन)',
              },
              {
                id: 'ID_580405108',
                text: 'Sacral region',
                display_or: 'ପିଚାା',
                display_hi: 'सेक्रमी क्षेत्र (सेक्रल रीजन)',
              },
              {
                id: 'ID_957000739',
                text: 'Flanks',
                display_or: 'ପେଟ ପୋଡା',
                display_hi: 'शरीर के पिछले भाग (फ्लेंक)',
              },
              {
                id: 'ID_1183788319',
                text: 'Chest',
                display_or: 'ଛାତି',
                display_hi: 'छाती ',
              },
            ],
            display_hi: 'दर्द निम्न अंगों में फैलता है',
          },
        ],
        display_hi: 'क्या दर्द, शरीर के अन्य भागों में जाता है?',
      },
      {
        id: 'ID_313791833',
        text: 'Duration',
        display: 'Since when have you had this symptom?',
        display_or: 'କେବେଠାରୁ',
        language: '%',
        options: [
          {
            id: 'ID_826155781',
            text: '[Enter since when]',
            input_type: 'duration',
            language: 'since',
            display_or: 'କେବେ ଠାରୁ ଲେଖ',
            display_hi: '( कब से है- दर्ज करें)',
          },
        ],
        display_hi: 'आपको यह लक्षण कब से है?',
      },
      {
        id: 'ID_374306869',
        text: 'Onset',
        display: 'How did the pain start?',
        display_or: 'କେମିତି ଅାରମ୍ଭ ହେଲା',
        options: [
          {
            id: 'ID_1052994247',
            text: 'Gradual',
            display_or: 'ଅାସ୍ତେ ଅାସ୍ତେ',
            display_hi: 'धीरे-धीरे',
          },
          {
            id: 'ID_467135839',
            text: 'Rapidly increasing',
            display_or: 'ସାଙ୍ଗେ ସାଙ୍ଗେ',
            display_hi: 'तेजी से बढ़ता हुआ',
          },
          {
            id: 'ID_1466867687',
            text: 'Sudden',
            display_or: 'ହଠାତ୍',
            display_hi: 'अचानक',
          },
          {
            id: 'ID_1906994892',
            text: 'Other [describe]',
            input_type: 'topic',
            language: '%',
            display_or: 'ଅନ୍ୟାନ୍ୟ (ବର୍ଣନା କର)',
            display_hi: 'अन्य (वर्णन करें)',
          },
        ],
        display_hi: 'दर्द कैसे शुरू हुआ?',
      },
      {
        id: 'ID_1026022834',
        text: 'Timing',
        display: 'What time of the day do you feel the pain?',
        display_or: 'ଦିନ ର କେଉଁ ସମୟ ରେ ଦରଜ ହୋଉ ଛି?',
        options: [
          {
            id: 'ID_1291573791',
            text: 'Morning',
            display_or: 'ସକାଳ',
            display_hi: 'सुबह',
          },
          {
            id: 'ID_1360001530',
            text: 'Night',
            display_or: 'ରାତି',
            display_hi: 'रात',
          },
          {
            id: 'ID_1637651626',
            text: 'Not linked to any particular time of day',
            display_or: 'ସମୟ ସହ ସମ୍ପର୍କ ନାହିଁ',
            display_hi: 'दर्द का संबंध किसी भी विशेष समय से नहीं है',
          },
          {
            id: 'ID_247362287',
            text: 'Other [Describe]',
            input_type: 'topic',
            language: '%',
            display_or: 'ଅନ୍ୟାନ୍ୟ (ବର୍ଣନା କର)',
            display_hi: 'अन्य (वर्णन करें)',
          },
        ],
        display_hi: 'पूरे दिन में, किस समय आपको दर्द महसूस होता है?',
      },
      {
        id: 'ID_1719879342',
        text: 'Character of the pain',
        display_or: 'କେଉଁ ପ୍ରକାର',
        options: [
          {
            id: 'ID_1639883399',
            text: 'Constant',
            display_or: 'ସବୁ ସମୟରେ',
            display_hi: 'लगातार',
          },
          {
            id: 'ID_839389482',
            text: 'Colicky / Intermittent (comes & goes)',
            display_or: 'ବେଳେ ବେଳେ',
            display_hi: 'पेट दर्द संबंधी (कोलिकी) / सविरामी (आता और जाता है)',
          },
          {
            id: 'ID_640171637',
            text: 'Gnawing/chewing',
            display_or: 'ଚିପିଲା ପରି',
            display_hi: 'काटना/ चबाना',
          },
          {
            id: 'ID_492112592',
            text: 'Cramping',
            display_or: 'କାମୁଡ଼ିଲା ପରି',
            display_hi: 'ऐंठन',
          },
          {
            id: 'ID_1454167791',
            text: 'Dull, aching',
            display_or: 'ଅାସ୍ତେ ଅାସ୍ତେ',
            display_hi: 'धीमा दर्द',
          },
          {
            id: 'ID_460419502',
            text: 'Other [describe]',
            input_type: 'topic',
            language: '%',
            display_or: 'ଅନ୍ୟାନ୍ୟ (ବର୍ଣନା କର)',
            display_hi: 'अन्य (वर्णन करें)',
          },
        ],
        display_hi: 'दर्द के लक्षण',
      },
      {
        id: 'ID_88181483',
        text: 'Severity',
        display: 'How severe is the pain?',
        display_or: 'କେତେ ଯୋରରେ',
        options: [
          {
            id: 'ID_277668181',
            text: 'Mild, 1-3',
            display_or: '1-3 ଅଳ୍ପ',
            display_hi: 'हल्का, 1-3',
          },
          {
            id: 'ID_279688978',
            text: 'Moderate, 4-6',
            display_or: '4-6 ମଧ୍ୟମ',
            display_hi: 'मध्यम, 4 -6',
          },
          {
            id: 'ID_1018371251',
            text: 'Severe, 7-9',
            display_or: '7-9 ବହୁତ',
            display_hi: 'गंभीर, 7-9',
          },
          {
            id: 'ID_1999276601',
            text: 'Very Severe, 10',
            display_or: '10 ବହୁତ ଯୋରରେ',
            display_hi: 'अति गंभीर, 10',
          },
        ],
        display_hi: 'दर्द कितना गंभीर है?',
      },
      {
        id: 'ID_294177528',
        text: 'Associated symptoms',
        display: 'Do you have the following symptom(s)?',
        display_or: 'ତମର ଏହି ଲକ୍ଷଣ ସବୁ ଅଛି କି?',
        pos_condition: 'c.',
        neg_condition: 's.',
        options: [
          {
            id: 'ID_1516120181',
            text: 'Nausea',
            display_or: 'ବାନ୍ତି ଲାଗିବା',
            display_hi: 'मिचली',
          },
          {
            id: 'ID_1126058800',
            text: 'Vomiting',
            display_or: 'ବାନ୍ତି ହେବା',
            display_hi: 'उल्टी',
          },
          {
            id: 'ID_1985768122',
            text: 'Anorexia',
            display_or: 'ଭୋକ ନ ଲାଗିବା',
            display_hi: 'अरुचि (क्षुधा अभाव)',
          },
          {
            id: 'ID_1147187284',
            text: 'Diarrhea',
            display_or: 'ଝାଡ଼ା ହେବା',
            display_hi: 'दस्त',
          },
          {
            id: 'ID_966543680',
            text: 'Constipation',
            display_or: 'କୋଷ୍ଠ କାଠିନ୍ଯ',
            display_hi: 'कब्ज',
          },
          {
            id: 'ID_74520590',
            text: 'Fever',
            display_or: 'ଜ୍ୱର',
            display_hi: 'बुखार',
          },
          {
            id: 'ID_442321642',
            text: 'Abdominal distention/Bloating',
            display_or: 'ପେଟ ଫମ୍ପାଇବା ବା ଫୁଲେଇବା',
            display_hi: 'उदरीय आध्मान / फूलना (पेट का फूलना)',
          },
          {
            id: 'ID_1113713472',
            text: 'Belching/Burping',
            display_or: 'ପେଟ ମୋଡ଼ି ହବା',
            display_hi: 'डकार',
          },
          {
            id: 'ID_1105381776',
            text: 'Passing gas',
            display_or: 'ହାକୁଟି ଆସିବା ବା ପେଟରେ ବାୟୁର ଅନୁଭବ',
            display_hi: 'हवा छोड़ना/पादना',
          },
          {
            id: 'ID_1045478269',
            text: 'Change in appetite',
            language: '%',
            display_or: 'ଭୁକରେ ପରିବର୍ତନ',
            options: [
              {
                id: 'ID_99335376',
                text: 'Increased',
                language: 'Increase in appetite',
                display_or: 'ବଢ଼ିଛି',
                display_hi: 'बढ़ना',
              },
              {
                id: 'ID_1103933462',
                text: 'Decreased',
                language: 'Decrease in appetite',
                display_or: 'କମିଛି',
                display_hi: 'घटना',
              },
            ],
            display_hi: 'भूख में बदलाव',
          },
          {
            id: 'ID_1091296053',
            text: 'Color change in stool [describe]',
            input_type: 'topic',
            display_or: 'ଝାଡା ର ରଂଗ ପରିବର୍ତନ (ବର୍ଣନା କର)',
            display_hi: 'मल के रंग में बदलाव (वर्णन करें)',
          },
          {
            id: 'ID_1597444506',
            text: 'Blood in stool',
            display_or: 'ଝାଡ଼ାରେ ରକ୍ତ',
            display_hi: 'मल में रक्त आना',
          },
          {
            id: 'ID_1688596384',
            text: 'Change in frequency of urination [describe]',
            input_type: 'topic',
            language: 'change in frequency of urination',
            display_or: 'ପରିଶ୍ରା ର ଆଭୂତି ର ପରିବର୍ତନ',
            display_hi: 'पेशाब लगने में बदलाव (वर्णन करें)',
          },
          {
            id: 'ID_1444846270',
            text: 'Color change in urine [describe]',
            input_type: 'topic',
            display_or: 'ଋଙ୍ଗ ପରିବର୍ତନ (ବର୍ଣନା କର)',
            language: 'Color change in urine',
            display_hi: 'पेशाब के रंग में बदलाव (वर्णन करें)',
          },
          {
            id: 'ID_324285652',
            text: 'Hiccups',
            display_or: 'ହକୁଡ଼ି',
            display_hi: 'हिचकी',
          },
          {
            id: 'ID_576443230',
            text: 'Restlessness',
            display_or: 'ଅଣନିଶ୍ୱାସ',
            display_hi: 'बैचैनी',
          },
          {
            id: 'ID_491498670',
            text: 'Injury',
            display_or: 'ଖଣ୍ଡିଅା ହୋଇଛି',
            display_hi: 'चोट (जख्म)',
          },
          {
            id: 'ID_938921130',
            text: 'Breathlessness',
            display_hi: 'साँस फूलना ',
          },
          {
            id: 'ID_1320736262',
            text: 'Vaginal discharge [describe]',
            gender: '0',
            age_min: '8',
            age_max: '120',
            options: [
              {
                id: 'ID_1972625858',
                text: 'Smell of the discharge',
                display: 'Is the discharge foul-smelling?',
                language: '%',
                options: [
                  {
                    id: 'ID_1635710830',
                    text: 'Yes',
                    language: 'Foul-smelling vaginal discharge present',
                    display_hi: 'बदबूदार योनि स्त्राव की मौजूदगी ',
                  },
                  {
                    id: 'ID_859766874',
                    text: 'No',
                    language: 'No foul-smelling vaginal discharge',
                    display_hi: 'योनि स्त्राव में बदबू का नहीं होना ',
                  },
                ],
                display_hi: 'क्या स्त्राव में बदबू है?',
              },
              {
                id: 'ID_157083625',
                text: 'Character of the discharge [describe]',
                options: [
                  {
                    id: 'ID_395803531',
                    text: 'Curd-like',
                    display_hi: 'दही के रंग का ',
                  },
                  {
                    id: 'ID_1161135312',
                    text: 'Greenish',
                    display_hi: 'हरापन लिए हुए ',
                  },
                  {
                    id: 'ID_922767326',
                    text: 'White',
                    display_hi: 'उजला ',
                  },
                  {
                    id: 'ID_936970040',
                    text: 'Watery',
                    display_hi: 'पानी लिए हुए ',
                  },
                  {
                    id: 'ID_581162594',
                    text: 'Blood-stained',
                    display_hi: 'खून के धब्बे लिए हुए ',
                  },
                ],
                display_hi: 'स्त्राव का प्रकार [वर्णन करें]',
              },
            ],
            display_hi: 'योनि स्त्राव [वर्णन करें]',
          },
          {
            id: 'ID_6543523',
            text: 'Other [describe]',
            input_type: 'topic',
            language: '%',
            display_or: 'ଅନ୍ୟାନ୍ୟ (ବର୍ଣନା କର)',
            display_hi: 'अन्य (वर्णन करें)',
          },
        ],
        display_hi: 'क्या आपको निम्न लक्षण है/हैं?',
      },
      {
        id: 'ID_1343783907',
        text: 'Exacerbating Factors',
        display: 'What worsens the pain?',
        display_or: 'ନିଁନ୍ମ ଲିଖିତ ଅବସ୍ଥା ରେ ଯନ୍ତ୍ରଣା କମି ଯାଏ କି?',
        options: [
          {
            id: 'ID_529298614',
            text: 'Hunger',
            display_or: 'ଭୋକ ସହିତ',
            display_hi: 'भूख',
          },
          {
            id: 'ID_884486009',
            text: 'Food',
            display_or: 'ଖାଇବା ବେଳେ',
            display_hi: 'भोजन',
          },
          {
            id: 'ID_1552008107',
            text: 'Urination',
            display_or: 'ପରିସ୍ରା ବେଳେ',
            display_hi: 'पेशाब करते समय',
          },
          {
            id: 'ID_1112583071',
            text: 'Pressure',
            display_or: 'ଚାପି ଦେଲେ',
            display_hi: 'दबाव',
          },
          {
            id: 'ID_953323975',
            text: 'Movement',
            display_or: 'ଗତି କଲେ',
            display_hi: 'हलचल/हिलना-डुलना',
          },
          {
            id: 'ID_267946733',
            text: 'Coughing',
            display_or: 'କାସ ହେଲେ',
            display_hi: 'खांसना',
          },
          {
            id: 'ID_1947537413',
            text: 'Straining',
            display_or: 'କୁନ୍ଥେଇଲେ',
            display_hi: 'अत्यधिक परिश्रम',
          },
          {
            id: 'ID_767780670',
            text: 'Other [describe]',
            input_type: 'topic',
            language: '%',
            display_or: 'ଅନ୍ୟାନ୍ୟ (ବର୍ଣନା କର)',
            display_hi: 'अन्य (वर्णन करें)',
          },
          {
            id: 'ID_1794978958',
            text: 'None',
            display_or: 'କିଛି ନକଲେ/ ମନା',
            display_hi: 'इनमें से कोई नहीं',
          },
          {
            id: 'ID_1955648297',
            text: "Don't know/Unsure",
            language: 'Patient did not know/was unsure',
            display_or: 'ଜାଣୁ ନଥିଲା/ ନିଶ୍ଚିତ ନଥିଲା',
            display_hi: 'पता नहीं/अनिश्चितता',
          },
        ],
        display_hi: 'दर्द इनमें से किस कारण से बढ़ता है ?',
      },
      {
        id: 'ID_971905494',
        text: 'Relieving Factors',
        display: 'What relieves/lessens the pain?',
        display_or: 'ନିଁନ୍ମ ଲିଖିତ ଅବସ୍ଥା ରେ ଯନ୍ତ୍ରଣା ଠିକ ହୁଏ କି?',
        options: [
          {
            id: 'ID_1266170702',
            text: 'Medications [describe]',
            input_type: 'topic',
            language: 'medications such as',
            display_or: 'ଔଷଧ ଦ୍ୱାରା (କେଉଁ ଔଷଧ)',
            display_hi: 'दवा लेने पर (वर्णन करें)',
          },
          {
            id: 'ID_1774996180',
            text: 'Food',
            display_or: 'ଖାଦ୍ୟ ଦ୍ୱାରା',
            display_hi: 'भोजन',
          },
          {
            id: 'ID_266980448',
            text: 'Leaning forward',
            display_or: 'ଅାଗକୁୁ ଲଇଁଲେ',
            display_hi: 'सामने झुकने पर',
          },
          {
            id: 'ID_33512499',
            text: 'Squatting',
            display_or: 'ତୁଙ୍କା ହୋଇ ବସିଲେ',
            display_hi: 'उकडूं बैठने पर',
          },
          {
            id: 'ID_1168881523',
            text: 'Vomiting',
            display_or: 'ବାନ୍ତି କଲେ',
            display_hi: 'उल्टी',
          },
          {
            id: 'ID_79912314',
            text: 'Passing of stool',
            display_or: 'ଝାଡ଼ା ଗଲେ',
            display_hi: 'मल त्याग करने पर',
          },
          {
            id: 'ID_443778764',
            text: 'Other [describe]',
            input_type: 'topic',
            language: '%',
            display_or: 'ଅନ୍ୟାନ୍ୟ (ବର୍ଣନା କର)',
            display_hi: 'अन्य (वर्णन करें)',
          },
          {
            id: 'ID_1303352427',
            text: 'None',
            display_or: 'କିଛି ନକଲେ/ ମନା',
            display_hi: 'इनमें से कोई नहीं',
          },
          {
            id: 'ID_1427868891',
            text: "Don't know/Unsure",
            language: 'Patient did not know/was unsure',
            display_or: 'ଜାଣୁ ନଥିଲା/ ନିଶ୍ଚିତ ନଥିଲା',
            display_hi: 'पता नहीं/अनिश्चितता',
          },
        ],
        display_hi: 'दर्द इनमें से किस कारण से कम होता है ',
      },
      {
        id: 'ID_1004615569',
        text: 'Menstrual history',
        display_or: 'ମାସିକିଅା ବିବରଣୀ',
        gender: '0',
        age_min: '8',
        age_max: '120',
        options: [
          {
            id: 'ID_1558745378',
            text: 'Has not started menstruation',
            display_or: 'ଅାରମ୍ଭ ହେଇନି',
            display_hi: 'मासिक धर्म शुरू नहीं हुआ',
          },
          {
            id: 'ID_518238742',
            text: 'Is menstruating',
            display_or: 'ମାସିକିଆ ହୋଉ ଛି',
            options: [
              {
                id: 'ID_850736876',
                text: 'Age at onset ',
                input_type: 'number',
                display_or: 'କେତେ ବୟସରେ',
                display_hi: 'प्रारंभ होने की उम्र',
              },
              {
                id: 'ID_1665118762',
                text: 'Last menstruation period',
                input_type: 'date',
                display_or: 'ଶେଷଥର କେବେ ହୋଇଥିଲା',
                language: 'LMP',
                display_hi: 'आखरी मासिक धर्म का समय',
              },
            ],
            display_hi: 'मासिक धर्म होता है',
          },
          {
            id: 'ID_1420686231',
            text: 'Menopause',
            display_or: 'ମାସିକିଅା ବନ୍ଦ',
            options: [
              {
                id: 'ID_745440603',
                text: 'Age at menopause ',
                input_type: 'number',
                display_or: 'କେବେ ହେଲା',
                display_hi: 'रजोनिवृत्ति (मेनोपॉज) के समय आपकी उम्र',
              },
            ],
            display_hi: 'रजोनिवृत्ति (मेनोपॉज)',
          },
        ],
        display_hi: 'मासिक धर्म का इतिहास',
      },
      {
        id: 'ID_573035068',
        text: 'Prior treatment sought',
        display:
          'Have you taken any treatment (including self-medication or home remedies) or seen any health provider for this problem before coming here today?',
        display_or:
          'ତମେ ଆଗରୁ କୌଣସି  ପ୍ରାକାର ଔଷଦ ନଇଥିଲ କି? (ନିଜେ ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ଘରୋଇ ଉପଚାର)',
        options: [
          {
            id: 'ID_1763201920',
            text: 'Yes [Describe]',
            input_type: 'topic',
            language: '%',
            display_or: 'ହାଁ (ବର୍ଣନା କର)',
            display_hi: 'हाँ [वर्णन करें]',
          },
          {
            id: 'ID_1226925547',
            text: 'None',
            display_or: 'କିଛି ନାହିଁ',
            display_hi: 'इनमें से कोई नहीं',
          },
        ],
        display_hi:
          'क्या आपने आज यहां आने से पहले इस तकलीफ के लिए कोई उपचार किया (स्वयं-दवा या घरेलू उपचार सहित) या किसी डॉक्टर को दिखाया है?',
      },
      {
        id: 'ID_1065741634',
        text: 'Additional information',
        display_or: 'ଅତିରିକ୍ତ ସୂଚନା',
        options: [
          {
            id: 'ID_1894895710',
            text: '[Enter additional information]',
            input_type: 'topic',
            language: '%',
            display_or: 'ଅତିରିକ୍ତ ସୂଚନା ପ୍ରଦାନ କରିବା',
            display_hi: '[अतिरिक्त जानकारी दर्ज करें]',
          },
        ],
        display_hi: 'अतिरिक्त जानकारी',
      },
    ],
    display_hi: 'पेट दर्द ',
  };
  private dataSubject = new BehaviorSubject<IMindMapData>(
    this.getMindMapData(this.mockData)
  );
  $data = this.dataSubject.asObservable();
  addData(parentNode: IMindMapData, childNode: IMindMapData) {
    if (parentNode) {
      if (!parentNode.children) {
        parentNode.children = new Array<IMindMapData>();
      }
      parentNode.children.push(childNode);
    }
  }
  getMindMapData(healthdata?: IHealthData): IMindMapData {
    let item: IMindMapData = { topic: '' };
    if (healthdata) {
      item.id = healthdata.id;
      item.topic = healthdata.text;
      item.perform_physical_exam = healthdata.perform_physical_exam;
      item.display = healthdata.display;
      item.display_or = healthdata.display_or;
      item.display_hi = healthdata.display_hi;
      item.language = healthdata.language;
      item.input_type = healthdata.input_type;
      item.gender = healthdata.gender;
      item.age_min = healthdata.age_min;
      item.age_max = healthdata.age_max;
      item.pos_condition = healthdata.pos_condition;
      item.neg_condition = healthdata.neg_condition;
      item.children = [];
      if (healthdata.options && healthdata.options.length > 0) {
        healthdata.options.forEach((element) => {
          item.children?.push(this.getMindMapData(element));
        });
      }
    }
    return item;
  }
  getHealthData(mmdata?: IMindMapData): IHealthData {
    let item: IHealthData = { text: '' };
    if (mmdata) {
      item.id = mmdata.id;
      item.text = mmdata.topic;
      item.perform_physical_exam = mmdata.perform_physical_exam;
      item.display = mmdata.display;
      item.display_or = mmdata.display_or;
      item.display_hi = mmdata.display_hi;
      item.language = mmdata.language;
      item.input_type = mmdata.input_type;
      item.gender = mmdata.gender;
      item.age_min = mmdata.age_min;
      item.age_max = mmdata.age_max;
      item.pos_condition = mmdata.pos_condition;
      item.neg_condition = mmdata.neg_condition;
      item.options = [];
      if (mmdata.children && mmdata.children.length > 0) {
        mmdata.children.forEach((element) => {
          item.options?.push(this.getHealthData(element));
        });
      }
    }
    return item;
  }
}
