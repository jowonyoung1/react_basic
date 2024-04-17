# 6. Hooks

## 6.1 useState

````js
import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value} 입니다.</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>
    </div>
  );
};

export default Counter;```
````

## 6.2 useEffect

- 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
- 기본구조

```js
  useEffect(() => {}, [의존성 배열]);
```

### 6.2.1 마운트될 때만 실행하고 싶을 때

- 의존성 배열에 빈 배열

### 6.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때

- 의존성 배열 안에 검사하고 싶은 값을 넣어주면 됨

### 6.2.3 뒤 정리하기

- 참고 : 컴포넌트의 라이프사이클

  - 모든 리액트 컴포넌트에는 라이트사이클(생명주기) 존재
  - 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비과정에서 시작하여 페이지에서 사라질 때 끝난다.
  - 가끔 컴포넌트를 처음으로 렌더링할 때나 컴포넌트를 업데이트하기 전후로 어떤 작업을 처리해야할 수도 있다.
  - 또한 불필요한 업데이트를 방지해야 할 수도 있다.
  - 라이프사이클 메서드는 클래스형 컴포넌트에서만 사용가능
  - 함수형 컴포넌트에서는 Hooks 기능을 사용하여 비슷한 작업을 처리
  - 마운트(mount):DOM이 생성되고 웹 브라우저 상에 나타나는 것
  - 업데이트(update)

    - 컴포넌트는 다음 같은 총 네가지 경우 업데이트 한다.
    - props가 바뀔 때
    - state가 바뀔 때
    - 상위 컴포넌트가 리렌더링될 때

  - 언마운트(unmount): 컴포넌트를 DOM에서 제거하는 것

  - useEffect는 기본적으로 렌더링되고 난 직후마다 실행된다.
  - 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
  - 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 cleanUp 함수를 반환해주어야 한다.
  - 렌더링 될 때 마다 뒷정리 함수가 계속 나타나는 것을 확인할 수 있다.
  - 뒷정리 함수가 호출될 때는 업데이트 직전의 값을 보여준다.
