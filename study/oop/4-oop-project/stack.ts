interface Stack {
  readonly size: number; // 스택안에 몇가지의 문자열이 있는지
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode; // 다른 스택노드를 가리킬 수 있다.
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}

stack.pop();
