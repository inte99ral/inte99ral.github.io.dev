# 테스트

## 코드 하이라이트

### C++

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

### Java

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

### JavaScript

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
