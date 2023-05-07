import { useState } from "react";
import { TextField } from "@mui/material";
import { MathComponent } from "mathjax-react";

function App() {
  const [seisu, setSeisu] = useState(NaN);
  let c = seisu;
  return (
    <>
      <h2 className="h2">素因数分解プログラム</h2>
      <span>vol.2 （最終更新：2023年5月7日）</span>
      <p>整数を入力してください。</p>
      <p>
        <TextField
          type="text"
          className={"textfield"}
          variant="filled"
          onChange={(e) => {
            setSeisu(parseFloat(e.target.value));
          }}
        />
      </p>
      <div className={"style"}>
        {(() => {
          if (Number.isNaN(c)) {
            return (
              <span className="message">まだ何も入力されていません。</span>
            );
          } else if (c < 1) {
            return (
              <span className="message">0や負の数は素数ではありません。</span>
            );
          } else if (c === 1) {
            return <span className="message">1は素数ではありません。</span>;
          } else if (c === 57) {
            return <span>素数です。</span>;
          } else if (c !== 57) {
            const numberArray = [];
            while (c % 2 === 0) {
              numberArray.push(2);
              c = c / 2;
            }
            let f = 3;
            while (f * f <= c) {
              if (c % f == 0) {
                numberArray.push(f);
                c = c / f;
              } else {
                f = f + 2;
              }
            }
            if (c !== 1) {
              numberArray.push(c);
            }
            if (numberArray.length !== 1) {
              const popedNumber = numberArray.pop();
              const formula = numberArray.map((value) => (
                <MathComponent
                  display={false}
                  tex={String.raw`${value} \times`}
                ></MathComponent>
              ));
              return (
                <>
                  <p style={{ margin: 10 }}>
                    <span style={{ margin: 5 }}>
                      <MathComponent
                        display={false}
                        tex={String.raw`${seisu} = `}
                      ></MathComponent>
                    </span>
                    {formula}
                    <MathComponent
                      display={false}
                      tex={String.raw`${popedNumber}`}
                    ></MathComponent>
                  </p>
                </>
              );
            } else {
              return <span>素数です。</span>;
            }
          }
        })()}
      </div>
      <p style={{ margin: 10 }}>
        {" "}
        ＊ 17桁以上の整数を入力すると誤作動が生じます。
      </p>
      <p style={{ margin: 10 }}>
        {" "}
        ＊ このサイトの制作者「かっちゃん」へのお問い合わせは
        <a
          href="https://random776.github.io/kacchan-uts2-22/contact.html"
          className="btn4"
        >
          こちら
        </a>
        から。
      </p>
      <p style={{ margin: 10 }}>
        {" "}
        ＊ 素因数分解プログラム vol.1 が
        <a
          href="https://random-page.onrender.com/prime_number3.html"
          className="btn4"
        >
          こちら
        </a>
        にあります。
      </p>
      <p style={{ margin: 10 }}>
        {" "}
        ＊ ソースコードは
        <a
          href="https://github.com/random776/soinsuubunkai/blob/master/src/App.tsx"
          className="btn4"
        >
          こちら
        </a>
        です。
      </p>
    </>
  );
}

export default App;
