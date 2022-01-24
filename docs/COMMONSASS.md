### 通用sass公共样式库


        一、默认重置及预设的样式 -- reset.css
            如：统一采用border-box,免去减法计算：

                *{
                    box-sizing: border-box;
                }

        二、整体采用提取首个字母,以 '-'连接的形式进行命名 前缀为 'r-',
            例如：
                .r-ta-c {
                    text-align: center;
                }

        三、部分特殊样式额外命名，方便记忆
            例如：
                .r-pointer {
                    cursor: pointer;
                }


#### 使用：

1、安装前切换镜像源为公司的内部镜像源：
```
 http://npmjs.kuaidizs.cn/
```
2、安装
```
$ npm i @raycloud/sass
or
$ yarn add @raycloud/sass
```

3、引入
```
@import '@raycloud/sass/index.min.css';
```

#### 常用字体大小
    支持的值有：
        12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 40
###### 举例：

|  class |  关键代码 |
|  :---- | :---- |
| .r-fs-12 | font-size: 12px; |
| .r-fs-16 | font-size: 16px; |


#### Font-Weight

|  class |  关键代码 |
|  :---- | :---- |
| .r-fw-400 | font-weight: 400; |
| .r-fw-500 | font-weight: 500; |
| .r-fw-600 | font-weight: 600; |
| .r-fw-700 | font-weight: 700; |
| .r-bold | font-weight: bold; |

#### 常用行高
    支持的值有：
        14, 16, 18, 20, 24, 26, 28, 30, 32, 36, 40, 48, 56

###### 举例：

|  class |  关键代码 |
|  :---- | :---- |
| .r-lh-16 | line-height: 16px; |
| .r-lh-24 | line-height: 24px; |


####  常用色值

|  class |  关键代码  |
|  :---- | :---- |
| .r-c-white | color: white; |
| .r-c-black | color: black; |
| .r-c-primary | color: #0089fa; |
| .r-c-success | color: #67c23a; |
| .r-c-warning | color: #ff9900; |
| .r-c-error | color: #e63e35; |
| .r-c-gray | color: #909399; |
| .r-c-000 | color: #000; |
| .r-c-ccc | color: #ccc; |
| .r-c-333 | color: #333; |
| .r-c-666 | color: #666; |
| .r-c-999 | color: #999; |
| .r-c-f1 | color: #f1f1f1; |
| .r-c-f2 | color: #f2f2f2; |
| .r-c-f5 | color: #f5f5f5; |

####  常用背景色值

|  class |  关键代码  |
|  :---- | :---- |
| .r-bg-white | background-color: white; |
| .r-bg-black | background-color: black; |
| .r-bg-primary | background-color: #0089fa; |
| .r-bg-success | background-color: #67c23a; |
| .r-bg-warning | background-color: #ff9900; |
| .r-bg-error | background-color: #e63e35; |
| .r-bg-gray | background-color: #909399; |
| .r-bg-000 | background-color: #000; |
| .r-bg-ccc | background-color: #ccc; |
| .r-bg-333 | background-color: #333; |
| .r-bg-666 | background-color: #666; |
| .r-bg-999 | background-color: #999; |
| .r-bg-f1 | background-color: #f1f1f1; |
| .r-bg-f2 | background-color: #f2f2f2; |
| .r-bg-f5 | background-color: #f5f5f5; |

#### Margin 值
    支持的值有：
       0, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 40, 48

###### 举例：
|  class |  关键代码  |
|  :---- | :---- |
| .r-m-12 | margin: 12px; |
| .r-mt-12 | margin-top: 12px; |
| .r-mr-12 | margin-right: 12px; |
| .r-mb-12 | margin-bottom: 12px; |
| .r-ml-12 | margin-left: 12px; |
| .r-m-lr-12 | margin-left: 12px;margin-right: 12px; |
| .r-m-tb-12 | margin-top: 12px;margin-bottom: 12px; |


#### Padding 值
    支持的值有：
       0, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 40, 48

###### 举例：
|  class |  关键代码  |
|  :---- | :---- |
| .r-pd-12 | padding: 12px; |
| .r-pt-12 | padding-top: 12px; |
| .r-pr-12 | padding-right: 12px; |
| .r-pb-12 | padding-bottom: 12px; |
| .r-pl-12 | padding-left: 12px; |
| .r-pd-lr-12 | padding-left: 12px; padding-right: 12px;|
| .r-pd-tb-12 | padding-top: 12px;padding-bottom: 12px; |


#### 圆角
    支持的值有：
      0, 2, 4, 6, 8, 10, 12, 16

###### 举例：
|  class |  关键代码  |
|  :---- | :---- |
| .r-br-4 | border-radius: 4px; |
| .r-br-8 | border-radius: 8px; |
| .r-cicle | border-radius: 50%; |

#### 其他常用值：

|  class |  备注  |
|  :---- | :---- |
| .r-w-full | width: 100%; |
| .r-h-full | height: 100%; |
| .r-ta-l | text-align: left; |
| .r-ta-c | text-align: center; |
| .r-ta-r | text-align: right; |
| .r-f-l | float: left; |
| .r-f-r | float: right; |
| .r-show | display: block; |
| .r-block | display: block; |
| .r-hide | display: none; |
| .r-of-h | overflow: hidden; |
| .r-hidden | overflow: hidden; |
| .r-fixed | position: fixed; |
| .r-relative | position: relative; |
| .r-absolute | position: absolute; |
| .r-pointer | cursor: pointer; |
| .r-no-select | user-select: none; |
| .r-oneline | 单行+省略号 |
| .r-twoline | 两行+省略号 |

####  Flex 布局

|  class |  关键代码  |
|  :---- |  :----  |
| .r-flex | display: flex; |
| .r-full | flex: 0 0 100%; |
| .r-fd-c | flex-direction: column; |
| .r-fd-cr |  flex-direction: column-reverse; |
| .r-fd-r |  flex-direction: row; |
| .r-fd-rr | flex-direction: row-reverse; |
| .r-fw-w | flex-wrap: wrap; |
| .r-fw-n | flex-wrap: nowrap; |
| .r-fw-wr | flex-wrap: wrap-reverse; |
| .r-jc-fs | justify-content: flex-start; |
| .r-jc-fe | justify-content: flex-end; |
| .r-jc-c | justify-content: center; |
| .r-jc-sb | justify-content: space-between; |
| .r-jc-sa | justify-content: space-around; |
| .r-ai-fs | align-items: flex-start; |
| .r-ai-fe | align-items: flex-end; |
| .r-ai-c | align-items: center; |
| .r-ai-b | align-items: baseline; |
| .r-ai-s | align-items: stretch; |
| .r-ac-fs | align-content: flex-start; |
| .r-ac-fe | align-content: flex-end; |
| .r-ac-c | align-content: center; |
| .r-ac-sb | align-content: space-between; |
| .r-ac-sa | align-content: space-around; |
| .r-ac-s | align-content: stretch; |
| .r-as-a | align-self: auto; |
| .r-as-fs | align-self: flex-start; |
| .r-as-fe | align-self: flex-end; |
| .r-as-c | align-self: center; |
| .r-as-b | align-self: baseline; |
| .r-as-s | align-self: stretch; |
| .r-flex-1 | flex: 1; |
| .r-flex-2 | flex: 2; |
| .r-flex-3 | flex: 3; |
| .r-1of2 | flex: 0 0 50%; |
| .r-1of3 | flex: 0 0 33.33333333%; |
| .r-2of3 | flex: 0 0 66.66666666%; |
| .r-1of4 | flex: 0 0 25%; |
| .r-3of4 | flex: 0 0 75%; |
| .r-1of5 | flex: 0 0 20%; |
| .r-2of5 | flex: 0 0 40%; |
| .r-3of5 | flex: 0 0 60%; |
| .r-4of5 | flex: 0 0 80%; |




#### 正方形、圆形图片：
    支持的大小有： 30, 32, 40, 48, 56, 64, 78

|  class |  备注  |
|  :---- | :---- |
| .r-img-48 | width: 48px;height: 48px; |
| .r-imgc-48 | width: 48px;height: 48px;border-radius: 50%; |


#### 1px细线：
    支持四个方向的细线边框
|  class |  备注  |
|  :---- | :---- |
| .r-hairline--top | 上边框细线 |
| .r-hairline--bottom | 下边框细线 |
| .r-hairline--left | 左边框细线 |
| .r-hairline--right | 右边框细线 |
