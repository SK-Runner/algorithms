class Queue{
  // 队列
  protected dataStore:Array<any> = [];
  // 队列中元素数量
  protected length:number = 0;
  // 入队
  enQueue(...elements:any[]){
    this.dataStore.push(...elements);
    this.length += elements.length;
  }
  // 出队
  deQueue(){
    if(this.length>0){
      this.length--;
      return this.dataStore.shift();
    }
    return false;
  }
  // 返回队头元素
  peek(){
    return this.dataStore[0];
  }
  // 返回队尾元素
  end(){
    return this.dataStore[this.length-1];
  }
  // 返回队中元素个数
  number(){
    return this.length;
  }

  // 返回队列所有元素
  toString(){
    return this.dataStore.toString();
  }

  // 清空栈
  clear(){
    this.dataStore.length = 0;
    this.length = 0;
  }

  // 判断队列是否为空
  empty(){
    return this.length ? false : true;
  }
}

let queue = new Queue();
queue.enQueue('a','b','c');
console.log(queue.peek());
console.log(queue.end());
console.log(queue.number());
console.log(queue.toString());
queue.deQueue();
console.log(queue.number());
console.log(queue.toString());
console.log(queue.empty());
queue.clear();
console.log(queue.number());
console.log(queue.toString());