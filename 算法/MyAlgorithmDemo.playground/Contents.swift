import UIKit


/// Mark - 冒泡算法
/*
func bubbleSortMethod(_ nums: inout [Int]) {
    var iCount = 0;//记录外层循环的次数
    var jCount = 0;//记录内存循环交换的次数
    let n = nums.count
    for i in 0..<n {
        iCount += 1
        for j in 0..<(n - 1 - i) {
            jCount += 1
            if nums[j] > nums[j + 1] {
                nums.swapAt(j, j + 1)
                print(nums)
                print("============")
            }
        }
    }
    print("外层次数:\(iCount)","交换次数:\(jCount)")
}
 
var nums = [10,1,2,9,7,19,5,3,8,13,17]
bubbleSortMethod(&nums)
*/





/// Mark - 选择排序
/**
 选择排序（Selection sort）是一种简单直观的排序算法。
 
 工作原理是：第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。以此类推，直到全部待排序的数据元素的个数为零。选择排序是不稳定的排序方法。
 */

/*
 写法1
func selectionSortMethod(_ nums: inout [Int]){
    let items = nums.count//数组的个数
    var minIndex:Int

    for i in 0..<items-1 {
        minIndex = i
        for j in i+1..<items {
            if nums[j] < nums[minIndex] {
                minIndex = j
            }
        }
        if i != minIndex {
         nums.swapAt(i, minIndex)
        }

        print("中途运算：\(nums)")
        print("===============")
    }
}

var nums = [10,1,2,9,7,19,5,3,8,13,17]
print("前边：\(nums)")
print("===============")
selectionSortMethod(&nums)
print("后边：\(nums)")
 
 写法2：
 func selectionSortMethod(_ nums: [Int]) -> [Int] {
   guard nums.count > 1 else { return nums }//必须大于1才能使用

   var array = nums
   var minIndex: Int
     
   for i in 0 ..< array.count - 1 {
     minIndex = i
     for j in i + 1 ..< array.count {
       if array[j] < array[minIndex] {
         minIndex = j
       }
     }

     if i != minIndex {
         array.swapAt(i, minIndex)
     }
   }
   return array
 }

 let oringeList = [10,1,2,9,-1,7,19,5,-9,3,8,13,17]
 let afterList = selectionSortMethod(oringeList)
 print(oringeList)
 print("======")
 print(afterList)
 
*/

/// Mark - 选择排序


/// Mark - 数据结构与算法之美案例代码
//func cal(n: Int) -> Int{
//    var sum = 0
//    let i = 1
//    for i in i...n  {
//        sum = sum + i
//    }
//    return sum
//}
//
//print(cal(n: 10))


/*
 /// Mark - 折半查找二分查找
 ///array  查找的数组
 ///target  目标元素
 ///-> Int?  返回目标元素的索引
 func binarySearch(_ array: [Int], target: Int) -> Int? {
     var left = 0
     var right = array.count - 1//数组的总个数
     
     while left <= right {
         let mid = left + (right - left) / 2
         let obj = array[mid] //根据索引取出元素
         if obj == target {
             return mid
         } else if obj < target {
             left = mid + 1
         } else {
             right = mid - 1
         }
     }

     return nil // 目标元素不在数组中
 }

 let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]
 if let index = binarySearch(sortedArray, target: 11) {
     print("目标元素在索引 \(index) 处。")
 } else {
     print("目标元素不在数组中。")
 }
 
 */


func insertionSort(_ a: inout [Int], n: Int) {
    if n <= 1 {
        return
    }
    
    for i in 1..<n {
        let value = a[i]
        var j = i - 1
        // 查找插入的位置并移动元素
        while j >= 0 && a[j] > value {
            a[j + 1] = a[j]
            j -= 1
        }
        // 插入数据到正确位置
        a[j + 1] = value
    }
}


//// 示例调用
//var numbers = [1, 9, 6, 3]
//insertionSort(&numbers,n: 10)
//print(numbers)
//


/// Mark - 桶排序算法学习

// 用户结构体：假设以年龄为排序依据
//struct User {
//    let age: Int
//    let name: String // 其他属性可扩展
//}
//
///// 桶排序函数：根据用户年龄排序
///// - 参数 users: 待排序的用户数组
///// - 返回值: 按年龄升序排列的用户数组
//func bucketSortUsers(_ users: [User]) -> [User] {
//    guard !users.isEmpty else { return [] } // 处理空数组
//    
//    // 1. 确定年龄范围
//    let minAge = users.min { $0.age < $1.age }!.age
//    let maxAge = users.max { $0.age < $1.age }!.age
//    
//    // 2. 初始化桶数组：每个桶对应一个年龄
//    let bucketCount = maxAge - minAge + 1
//    var buckets = Array(repeating: [User](), count: bucketCount)
//    
//    // 3. 数据分桶：将用户按年龄分配到对应桶中
//    for user in users {
//        let index = user.age - minAge // 计算桶的索引
//        buckets[index].append(user)
//    }
//    
//    // 4. 合并桶：按年龄顺序提取所有用户
//    var sortedUsers = [User]()
//    for bucket in buckets {
//        sortedUsers.append(contentsOf: bucket) // 桶内无需排序
//    }
//    
//    return sortedUsers
//}
//
//// --------------- 测试代码 ---------------
//let testUsers = [
//    User(age: 25, name: "张三"),
//    User(age: 30, name: "李四"),
//    User(age: 20, name: "王五"),
//    User(age: 25, name: "赵六")
//]
//
//let sortedUsers = bucketSortUsers(testUsers)
//sortedUsers.forEach { print("年龄: \($0.age), 名字: \($0.name)") }

/*
 输出：
 年龄: 20, 名字: 王五
 年龄: 25, 名字: 张三
 年龄: 25, 名字: 赵六
 年龄: 30, 名字: 李四
 */


// 用户数据结构
struct User {
    let id: String
    let registerTime: TimeInterval // 时间戳（秒级）
}

/// 桶排序：按注册年份排序
func bucketSortUsers(_ users: [User]) -> [User] {
    guard !users.isEmpty else { return [] }
    
    // 1. 确定时间范围（2020-2023）
    let calendar = Calendar.current
    let startYear = 2020
    let endYear = 2023
    let bucketCount = endYear - startYear + 1
    
    // 2. 初始化桶
    var buckets = Array(repeating: [User](), count: bucketCount)
    
    // 3. 分桶：按年份分配到桶中
    for user in users {
        let date = Date(timeIntervalSince1970: user.registerTime)
        let year = calendar.component(.year, from: date)
        let index = year - startYear
        buckets[index].append(user)
    }
    
    // 4. 桶内排序：按时间戳升序（快速排序）
    for i in 0..<bucketCount {
        buckets[i].sort { $0.registerTime < $1.registerTime }
    }
    
    // 5. 合并结果
    return buckets.flatMap { $0 }
}

// --------------- 测试用例 ---------------
let testUsers = [
    User(id: "A", registerTime: 1640995200), // 2022-01-01
    User(id: "B", registerTime: 1609459200), // 2021-01-01
    User(id: "C", registerTime: 1672531200), // 2023-01-01
    User(id: "D", registerTime: 1577836800)  // 2020-01-01
]

let sortedUsers = bucketSortUsers(testUsers)
sortedUsers.forEach {
    let date = Date(timeIntervalSince1970: $0.registerTime)
    print("用户ID: \($0.id), 注册时间: \(date)")
}

/*
 输出：
 用户ID: D, 注册时间: 2020-01-01 00:00:00 +0000
 用户ID: B, 注册时间: 2021-01-01 00:00:00 +0000
 用户ID: A, 注册时间: 2022-01-01 00:00:00 +0000
 用户ID: C, 注册时间: 2023-01-01 00:00:00 +0000
 */



























