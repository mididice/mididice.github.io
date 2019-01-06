---
layout: post
title:  "java, python, js library로 미디 파일 분석하기"
date:   2019-01-01 00:00:00 -0100
tag: [midi analyze, jfugue, pretty-midi, tone.js]
---

주의:  이 글은 어디까지나 초보자의 입장에서 다른 초보자들을 위해 공유하는 작업 일지입니다. 틀린 내용이 있을 수 있기 때문에 혹시라도 틀린 내용을 발견하게 된다면 mididice@gmail.com 으로 알려주세요.

# 사용 라이브러리

---

- [https://github.com/craffel/pretty-midi](https://github.com/craffel/pretty-midi)
    - interplaytion의 파이썬 서버를 만들 때 사용한 라이브러리이다. [Magenta](https://github.com/tensorflow/magenta)에서도 사용하고 있는 라이브러리이고 파이썬스럽게 미디파일을 쉽고 간편하게 분석할 수 있다.
- [http://www.jfugue.org/](http://www.jfugue.org/)
    - mididice의 첫 프로젝트인 mididice를 만들 때 사용한 라이브러리이다. 자바로 구현되어 있어 자바 사용자에게 편리한 인터페이스를 제공하고 있다.
- [https://github.com/Tonejs/MidiConvert](https://github.com/Tonejs/MidiConvert)
    - MidiConvert는 Tone.js를 스터디하다 알게 된 라이브러리이다. 자바스크립트 기반의 프로젝트에서 유용하게 사용할 수 있을 듯 하다.


# pretty_midi

---

pretty_midi는 Midi 데이터를 수정하거나 추출하여 손쉽게 다룰 수 있는 다용도의 함수와 클래스들을 가지고 있다. 문서는 [여기](http://craffel.github.io/pretty-midi/)에서 볼 수 있다. 주피터 노트북으로 만들어진 튜토리얼은 [여기](http://nbviewer.jupyter.org/github/craffel/pretty-midi/blob/master/Tutorial.ipynb)에서 볼 수 있다.
pretty_midi는 pip로 손쉽게 설치가 가능하다.
```python
pip install pretty_midi
```
pertty_midi로 Midi 파일을 분석하는 예제를 보자.

```python
import pretty_midi
new_beat = pretty_midi.PrettyMIDI('2018-10-19_080150_02.mid') #1
for instrument in new_beat.instruments: #2
    for note in instrument.notes: #3
        print(note.velocity, note.pitch, note.start, note.end)
```

1. class pretty_midi.PrettyMIDI(midi_file)함수를 호출하여 미디 파일을 읽어 들인다. 미디 파일을 쉽게 다룰 수 있는 포맷인 컨테이너 역할을 한다.
2. 생성된 PrettyMIDI 객체의 instruments 속성을 바탕으로 for문을 돌린다. instruments는 program, is_name, notes, pitch_bends, control_changes의 속성을 담고 있다. 
3. instrument의 notes를 for문을 돌린다. notes는 note 이벤트를 담는 객체로 velocity, pitch, start, end의 속성을 가지고 있다.

pretty_midi로 간단한 미디 파일 분석을 알아보았다. 알아낸 velocity, pitch, start, end 데이터를 바탕으로 재미있는 데이터 조작을 해보자.

# jfugue

---

jfugue는 jvm 환경에서 구동이 가능한 java기반의 라이브러리이다. 아파치 라이센스를 채택하고 있는 오픈소스이므로 미디에 대한 복잡함 이해 없이 사용하기를 원하는 jvm기반의 개발자는 누구나 사용이 가능하다. 음악을 재생하거나 만들어내는 데 유용한 기능들을 포함하고 있다.

jfugue를 사용하여 미디 파일을 분석하는 예제를 보자.

```java
MidiParser parser = new MidiParser();
StaccatoParserListener listener = new StaccatoParserListener();
parser.addParserListener(listener);
parser.parse(MidiSystem.getSequence(new File("example.mid")));
Pattern pattern = listener.getPattern();
System.out.println(pattern);
```
```java
File f = new File("example.mid");
Pattern p = MidiFileManager.loadPatternFromMidi(f);         
List<Token> list = p.getTokens();
for(int i = 0; i<list.size();i++) {
    if(list.get(i).getType()==TokenType.NOTE) {
        Pattern pattern = list.get(i).getPattern();
        System.out.println(pattern);
    }
}
```

위 두 예제 모두 결국에는 미디 파일을 읽어들여 Pattern 객체를 만든다.
        
        T120 TIME:4/4 V0 I0 C5sa100d0

Pattern객체의 결과 값으로 나온 값은 jfugue에서 정의한 포맷으로 의미를 담고 있다. T120은 120bpm을 의미한다. TIME: 4/4는 4분의4박자를 의미한다. V0는 voice를 의미한다. 미디는 16개의 채널을 . I0은 악기(instrument)를 의미한다. 0는 피아노이다. C5sa100d0에서 C5는 C는 코드를 5는 옥타브(octave)를 의미한다. s는 음의 길이(duration)를 의미한다. s는 16분음표(sixteenth)를 의미한다. a100은 attack 100을 의미한다. d0은 decay 0을 의미하는데 미디에는 attack과 decay가 없기 때문에 velocity를 의미하는 것으로 보인다.

---
### 음의 길이에 따른 캐릭터 매칭 표

whole(온음): w
half(2분음): h
quarter(4분음): q
eighth(8분음): i
sixteenth(16분음): s
thirty-second(32분음): t
sixty-fourth(64분음): x
one-twenty-eighth(128분음): o 
---

### bpm에 따른 음의 길이 시간 환산 공식

- 온음(whole) 시간 = 60초(second) / bpm * 4
- 2분음(half) 시간 = 60초(second) / bpm * 4 / 2
- 4분음(quarter) 시간 = 60초(second) / bpm * 4 / 4


# tone.js MidiConvert

---

tone.js는 WebaudioAPI를 사용하여 브라우저 상에서 음악을 만들거나 변조하여 창의적인 작업물을 만들 수 있는 프레임워크입니다. tone.js팀에서 작업한 MidiConvert를 바탕으로 js에서 미디 파일을 분석하여 사용할 수 있습니다. 자바스크립트 기반이기 때문에 웹 브라우저에서나 js기반의 개발자가 사용할 수 있습니다. 

```javascript
<script src="midiconvert.js"></script>
<script>
MidiConvert.load("example.mid", function(midi) {  
var notes = midi.tracks[1].notes;
for(var i = 0; i<notes.length; i++){
    notes[i].duration;
    notes[i].midi;
    notes[i].time;
    notes[i].velocity;
    }
    });
</script>
```

미디 분석 결과는 다음 예제와 같다.

```javascript
{
  // the transport and timing data
  header: {
    name: String,                     // the name of the first empty track, 
                                      // which is usually the song name
    bpm: Number,                      // the tempo, e.g. 120
    timeSignature: [Number, Number],  // the time signature, e.g. [4, 4],
    PPQ: Number                       // the Pulses Per Quarter of the midi file
  },

  startTime: Number,                  // the time before the first note plays
  duration: Number,                   // the time until the last note finishes

  // an array of midi tracks
  tracks: [
    {
      id: Number,                     // the position of this track in the array
      name: String,                   // the track name if one was given
      notes: [
        {
          midi: Number,               // midi number, e.g. 60
          time: Number,               // time in seconds
          note: String,               // note name, e.g. "C4"
          velocity: Number,           // normalized 0-1 velocity
          duration: Number,           // duration between noteOn and noteOff
        }
      ],

      startTime: Number,              // the time before the first note plays
      duration: Number,               // the time until the last note finishes

      // midi control changes
      controlChanges: {
        // if there are control changes in the midi file
        '91': [
          {
            number: Number,           // the cc number
            time: Number,             // time in seconds
            value: Number,            // normalized 0-1
          }
        ],
      },

      isPercussion: Boolean,          // true if this track is on a percussion
                                      // channel
      channelNumber: Number,          // the ID for this channel; 9 and 10 are
                                      // reserved for percussion

      instrumentNumber: Number,       // the ID for this instrument, as defined
                                      // by the MIDI spec
      instrumentFamily: String,       // the name of this instrument's family,
                                      // as defined by the MIDI spec
      instrument: String,             // the instrument name, as defined by the
                                      // MIDI spec
    }
  ]
}
```

# 마치며

이상으로 python, java, javascript를 사용하여 미디파일을 분석하였다. 분석된 결과를 바탕으로 음악 시각화 또는 딥러닝 및 규칙기반의 생성 음악에 적용하고자 한다. pretty_midi를 사용한 interplaytion-server의 예제는 [여기](https://github.com/mididice/interplaytions-server)에서 실제 활용 예를 볼 수 있다. jfugue를 사용한 mididice의 예제는 [여기](https://github.com/mididice/mididice)에서 실제 사용 예제를 볼 수 있다. 음악 라이브러리와 함께 창조적이고 재미있는 작업을 진행해보자. 
