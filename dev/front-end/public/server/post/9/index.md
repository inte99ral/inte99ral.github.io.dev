# 마크다운：Markdown

## 기본 문법

### Latex 수식

- n<sup>r</sup>
- A<sub>k</sub>

- When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
  $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

- ${\color{lightgreen}Light \space Green}$

- $\color{#FF9922} \footnotesize \textnormal{일반 텍스트}$

<div align=center>

$_{n}\mathrm{H}_{r} = C'(n, r) = \binom{n+r-1}{r} = \binom{n+r-1}{n-1}$

</div>

### 인용

- 블록 인용：\`>\` 사용

  > 첫번째 블록
  >
  > > 두번째 블록
  > >
  > > > 세번째 블록

### 코드 블럭

- 인라인 코드

  - `[](int x, int y) -> int { return x + y; };`

- 펜스드 코드 블럭

  ```cpp
  [](int x, int y) -> int { return x + y; };
  ```

### 코드 하이라이트

- C++

```cpp
#include <bits/stdc++.h>

#ifndef ONLINE_JUDGE
#define SET_IO(INPUT_DATA) std::ios::sync_with_stdio(false);std::cin.tie(nullptr);std::cout.tie(nullptr);std::ifstream fs(INPUT_DATA);std::cin.rdbuf(fs.is_open()?((std::istream*)&fs)->rdbuf():((std::istream*)new std::stringstream(INPUT_DATA))->rdbuf())
#else
#define SET_IO(INPUT_PATH) std::ios::sync_with_stdio(false);std::cin.tie(nullptr);std::cout.tie(nullptr)
#endif

using namespace std;

int main() {
  SET_IO("_INPUT_.txt");

  for (string buf; cin >> buf;) cout << buf << endl;

  return 0;
}
```

- Java

```java
package Baekjoon;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("__INPUT__.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    for (String line = br.readLine(); line != null; line = br.readLine()) System.out.println(line);

    br.close();
    return;
  }
}

```

- JavaScript

```js
const reader = {
  fullLine: () => this.fullLine,
  hasMoreLines: () => !!this.fullLine[this.lineIndex],
  readLine: (() => {
    this.lineIndex = 0;
    this.fullLine = require('fs')
      // .readFileSync('dev/stdin') // * 터미널 입력
      .readFileSync('__INPUT__.txt') // * 로컬 __INPUT__.txt 입력
      .toString()
      .split(/\r\n|\r|\n/gm);

    return () => this.fullLine[this.lineIndex++];
  })(),
};

while (reader.hasMoreLines()) console.log(reader.readLine());
```

### 가운데 정렬：Align Center

  <div align=left>
  『LEFT_TEXT』
  </div>

  <center>
  『CENTER_TEXT_0』
  </center>

  <div align=center>
  『CENTER_TEXT_1』
  </div>

  <div align=right>
  『RIGHT_TEXT』
  </div>

### 확장/축소：Accordion

<details>
<summary>

```cpp
int main() {
... 클릭하여 확장/축소 ...
```

</summary>

```cpp
cout << "Hello, World!" << endl;
```

</details>

```cpp
return 0;
}
```

### 수평선

---

  <hr />

### 공백：No Breaking Space

&nbsp;공백&nbsp;공백

### 줄바꿈：Breaking Line

개행1
개행1

개행2

개행2

개행3<br />개행3

### 표：Table

#### Table > Markdown Native

| 첫번째(왼쪽정렬) | 두번째(가운데정렬) | 세번째(오른쪽정렬) |
| ---------------- | :----------------: | -----------------: |
| 왼쪽정렬         |     가운데정렬     |         오른쪽정렬 |

#### Table > HTML Tag

  <table>
  <tr>
  <th align=left>첫번째(왼쪽정렬, 코드블럭)</th>
  <th align=center>두번째(가운데정렬)</th>
  <th align=right>세번째(오른쪽정렬)</th>
  </tr>
  <tr>
  <td align=left>

```cpp
#include <bits/stdc++.h>

int main() {
return 0;
}
```

  </td>
  <td align=center>가운데정렬</td>
  <td align=right>오른쪽정렬</td>
  </tr>
  </table>

### 텍스트 서식

- _이탤릭체_
- **볼드체**
- <b>볼드체</b>
- ~~취소선~~
- <del>취소선</del>
- <u>밑줄</u>
- **_볼드+이탤릭_**
- **~~볼드+취소선~~**
- **_~~볼드+이탤릭+취소선~~_**

### 목록

- 순서 없는 목록
  - 목록1
  - 목록2
- 순서 있는 목록
  1. 목록1
  2. 목록2
- 체크리스트
  - [ ] 목록1
  - [ ] 목록2

### 참조

#### 참조 > Markdown Native

- [하이퍼 링크](./server/post/9/0.png)
- ![대체 텍스트](./server/post/9/0.png)

#### 참조 > HTML Tag

- <a href="./server/post/9/0.png">이미지 링크</a>
- <img src="./server/post/9/0.png" alt="0" width="200" height="200" />
