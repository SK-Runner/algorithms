class CList{

  // 使用protected关键字，保证属性不能被实例直接获取或修改
  protected dataStore:Array<any> = [];
  protected pos:number = 0;
  protected listSize:number = 0;

  constructor(...args:any){
    this.dataStore.push(...args);
    this.listSize = args.length;
  }

  // 获取列表总长度
  getListSize():number{
    return this.listSize;
  }

  // 返回列表的字符串形式
  toString():string {
    return this.dataStore.toString();
  }

  // 在现有元素后插入新元素
  insert(after:any, ...elements:any[]) {
    this.dataStore.splice(after,0,...elements);
    this.listSize += elements.length;
  }

  // 在列表末尾追加元素
  append(...elements: any[]) {
    this.dataStore.push(...elements);
    this.listSize += elements.length;
  }

  // 查找某元素的位置,查不到返回-1
  find(element: any){
    let index = this.dataStore.indexOf(element);
    return index;
  }

  // 移除某个元素
  remove(element:any){
    let index = this.find(element);
    if(index !== -1){
      this.dataStore.splice(index,1);
      this.listSize--;
    }else{
      return `warning:找不到${element}元素`;
    }
  }

  // 清空列表所有元素
  clear(){
    this.dataStore.length = 0;
    this.listSize = 0;
  }

  // 将指针移动到最前端
  front() {
    this.pos = 0;
  }

  // 将指针移动到末尾
  end(){
    this.pos = this.listSize-1;
  }

  // 指针前移
  prev() {
    if(this.pos>0){
      --this.pos;
    }else{
      console.error('指针已经位于列表最前端');
    }
  }

  // 指针后移
  next() {
    if(this.pos<this.listSize){
      ++this.pos;
    }else{
      console.error('列表已经位于列表末尾');
      return false;
    }
  }
  // 返回当前位置
  currentPos(){
    return this.pos;
  }
  // 将指针移动到指定位置
  moveTo(position: number){
    if(position<this.listSize && position>=0){
      this.pos = position;
    }else{
      console.error('指针不可以移动到此位置');
    }
  }

  // 返回当前位置元素
  getElement(){
    return this.dataStore[this.pos];
  }

  // 指针是否可以后移
  hasNext(){
    return this.pos < this.listSize;
  }

  // 指针是否可以前移
  hasPrev(){
    return this.pos > 0;
  }

  // 迭代器
  listIterator(){
    this.front();
    while(this.hasNext()){
      console.log(this.getElement());
      this.next();
    }
  }

}

let list1 = new CList('1',{name:'lili'},'3');
list1.listIterator();