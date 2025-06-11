import UIKit
import Foundation

//enum PaperSize: String {
//    case A4, A5, Letter, Legal
//}
//let selectedSize = PaperSize.Letter
//    print(selectedSize.rawValue)
//    print(selectedSize == PaperSize(rawValue: selectedSize.rawValue)!)


 


/**
 1.默认创建是串行队列
 let queque1 = DispatchQueue(label: "jc.test.log1",qos: .default)
 let queque2 = DispatchQueue(label: "jc.test.log2",qos: .utility)
queque1.sync {
     for i in 0..<5 {
     print("来了一+\(i)")
     }
 }
 queque2.sync {
     for i in 5..<10 {
     print("来了二+\(i)")
     }
 }
*/
 

 /**
 异步串行队列
let queque1 = DispatchQueue(label: "jc.test.log1",qos: .default)
let queque2 = DispatchQueue(label: "jc.test.log21",qos: .utility)
queque1.async {
    for i in 0..<5 {
    print("来了一+\(i)")
    }
}
queque2.async {
    for i in 5..<10 {
    print("来了二+\(i)")
    }
}
*/



/**
 并发队列
let queue = DispatchQueue(label: "jc.test.log1", qos: .utility, attributes: .concurrent)

queue.sync  {
    for i in 0..<5 {
       print("来了一+\(i)")
       }
}

queue.sync {
     for i in 5..<10 {
       print("来了二+\(i)")
       }
}

 */

/*
let queue = DispatchQueue(label: "jc.test.log", qos: .utility,
attributes: .initiallyInactive)

queue.async {
    for i in 0..<5 {
       print("来了一+\(i)")
       }
}

queue.async {
     for i in 5..<10 {
       print("来了二+\(i)")
       }
}

//需要调用activate，激活队列。
queue.activate()
*/

/**
 延迟操作
let queue = DispatchQueue(label: "jc.test.log")

let time = DispatchTimeInterval.seconds(3)

queue.asyncAfter(wallDeadline: .now() + time) {
    print("wall dead line done")
}

queue.asyncAfter(deadline: .now() + time) {
    print("dead line done")
}
*/

/**
方法1： 多个网络任务全部执行完毕之后统一进行处理。
let group = DispatchGroup();
let queue1 = DispatchQueue(label: "jc.test.com1", qos: .utility)
let queue2 = DispatchQueue(label: "jc.test.com2", qos: .utility)
let queue3 = DispatchQueue(label: "jc.test.com3", qos: .utility)
group.enter()
queue1.async(group: group){
group.leave()
  print("queue1.async")
}


group.enter()
queue2.async(group: group){
group.leave()
    print("queue2.async")
}


group.enter()
queue3.async(group: group){
group.leave()
    print("queue3.async")
}

group.notify(queue: DispatchQueue.main){
   print("group.notify")
}
*/


/**
2.信号量
 
 let semaphore = DispatchSemaphore(value: 2)//创建信号量
 let queue = DispatchQueue(label: "testConcurrentQueue", attributes: .concurrent)

 queue.async(){
     semaphore.wait(timeout: .distantFuture)
     print("run task 1")
     sleep(1)
     print("complete task 1")
     semaphore.signal()
 }

 queue.async(){
     semaphore.wait(timeout: .distantFuture)
     print("run task 2")
     sleep(1)
     print("complete task 2")
     semaphore.signal()
 }

 queue.async(){
     semaphore.wait(timeout: .distantFuture)
     print("run task 3")
     sleep(1)
     print("complete task 3")
     semaphore.signal()
 }

 */



/**
 3.栅栏函数(barrier)
 
 //创建串行队列
 //        let queue = DispatchQueue.init(label: "test", qos: .default, attributes: .init(rawValue: 0), autoreleaseFrequency: .workItem, target: nil)
 //创建并行队列
 let queue = DispatchQueue.init(label: "test1", qos: .default, attributes: .concurrent, autoreleaseFrequency: .workItem, target: nil)

 queue.async {//任务一
     for index in 0...3 {
         print("----\(index)---")
     }
 }
 queue.async {//任务二
     for index in 0...3 {
         print("===\(index)===");
     }
 }

 queue.async(group: nil, qos: .default, flags: .barrier) {
     print("group")
 }

 queue.async {
     print("finish")
 }
 */


/*
let operation = BlockOperation {
            
    print("任务---\(Thread.current)")
}


operation.addExecutionBlock {
    
    print("任务2---\(Thread.current)")
}
    
operation.addExecutionBlock {
    
    print("任务3---\(Thread.current)")
}


operation.start()

*/


/*
 两种操作方法：
 1.把操作对象添加到队列。
 2.直接在队列中添加操作任务。
let queue = OperationQueue()
let operation1 = BlockOperation {
    
    print("任务1---\(Thread.current)")
}
   
let operation2 = BlockOperation {
    
    print("任务2---\(Thread.current)")
}
    
//把操作对象添加到队列
queue.addOperation(operation1)
queue.addOperation(operation2)

queue.addOperation {
    print("任务---\(Thread.current)")
}*/

/*
let queue = OperationQueue()
//可以通过修改控制最大并发数来进行并发与串行的测试
queue.maxConcurrentOperationCount = 1
// queue.maxConcurrentOperationCount = 2
let operation1 = BlockOperation {
    
    print("任务1---\(Thread.current)")
}
   
let operation2 = BlockOperation {
    print("任务2---\(Thread.current)")
}
queue.addOperation(operation1)
queue.addOperation(operation2)
queue.addOperation {
    print("任务3---\(Thread.current)")
}
*/

let queue = OperationQueue()
        
let op1 = BlockOperation {
    
    print("任务1---\(Thread.current)")
}
   
let op2 = BlockOperation {
    
    print("任务2---\(Thread.current)")
}
    
let op3 = BlockOperation {
    
    print("任务3---\(Thread.current)")
}
//op3依赖于op1，则先完成op1，再完成op3
op3.addDependency(op1)
//op1依赖于op2，则先完成op2，再完成op1
op1.addDependency(op2)
//最终的依赖关系就是，op2->op1->op3
 

queue.addOperation(op1)
queue.addOperation(op2)
queue.addOperation(op3)

op1.isReady
