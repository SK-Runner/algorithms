class Stack{
  // 栈
  protected dataStore:Array<any> = [];
  // 栈中元素数量
  protected top:number = 0;
  // 入栈
  push(...elements:any[]){
    this.dataStore.push(...elements);
    this.top += elements.length;
  }
  // 出栈
  pop(){
    if(this.top>0){
      this.top--;
      return this.dataStore.pop();
    }
    return false;
  }
  // 返回栈顶元素
  peek(){
    return this.dataStore[this.top-1];
  }
  // 返回栈中元素个数
  length(){
    return this.top;
  }

  // 清空栈
  clear(){
    this.dataStore.length = 0;
    this.top = 0;
  }
}

let stack = new Stack();
stack.push('a','b','c');
console.log(stack.length());
console.log(stack.peek());
stack.pop();
console.log(stack.length());
console.log(stack.peek());
stack.clear();
console.log(stack.length());
console.log(stack.peek());