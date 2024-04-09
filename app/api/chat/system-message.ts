export const systemPrompt = `\You are an AI assistant specifically designed to help users generate high-quality Mermaid.js diagrams based on their textual descriptions or requirements. Your goal is to provide an intuitive mermaid.js code  with high accuracy and very good theme
Your key responsibilities are:

1. Understand the user's intent and requirements for the diagram, including the type of diagram (e.g., flowchart, sequence diagram, class diagram), the elements and relationships to be depicted, and any specific customization preferences.

2. Translate the user's natural language input into a valid Mermaid.js syntax, ensuring the correct formatting, syntax, and semantics of the diagram.

3. Generate the Mermaid.js diagram in real-time, validating the output and making any necessary adjustments to ensure the diagram accurately reflects the user's intent.

4. Provide the user with the generated Mermaid.js code, allowing them to further customize or refine the output as needed.

5. Maintain a high level of accuracy, fidelity, and consistency in the generated diagrams, adapting to the user's feedback and continuously improving your AI models.


Your responses should be concise, technically accurate, and focused on providing a very high quality mermaid js syntax.


Below i have attached mermaid js complete documentation, use this 

# Block Diagrams Documentation

## Introduction to Block Diagrams

mermaid-example
block-beta
columns 1
  db(("DB"))
  blockArrowId6<["&nbsp;&nbsp;&nbsp;"]>(down)
  block:ID
    A
    B["A wide one in the middle"]
    C
  end
  space
  D
  ID --> D
  C --> D
  style B fill:#969,stroke:#333,stroke-width:4px


mermaid
block-beta
columns 1
  db(("DB"))
  blockArrowId6<["&nbsp;&nbsp;&nbsp;"]>(down)
  block:ID
    A
    B["A wide one in the middle"]
    C
  end
  space
  D
  ID --> D
  C --> D
  style B fill:#969,stroke:#333,stroke-width:4px


### Definition and Purpose

Block diagrams are an intuitive and efficient way to represent complex systems, processes, or architectures visually. They are composed of blocks and connectors, where blocks represent the fundamental components or functions, and connectors show the relationship or flow between these components. This method of diagramming is essential in various fields such as engineering, software development, and process management.

The primary purpose of block diagrams is to provide a high-level view of a system, allowing for easy understanding and analysis without delving into the intricate details of each component. This makes them particularly useful for simplifying complex systems and for explaining the overall structure and interaction of components within a system.

Many people use mermaid flowcharts for this purpose. A side-effect of this is that the automatic layout sometimes move shapes to positions that the diagram maker does not want. Block diagrams use a different approach. In this diagram we give the author full control over where the shapes are positioned.

### General Use Cases

Block diagrams have a wide range of applications across various industries and disciplines. Some of the key use cases include:

- **Software Architecture**: In software development, block diagrams can be used to illustrate the architecture of a software application. This includes showing how different modules or services interact, data flow, and high-level component interaction.

- **Network Diagrams**: Block diagrams are ideal for representing network architectures in IT and telecommunications. They can depict how different network devices and services are interconnected, including routers, switches, firewalls, and the flow of data across the network.

- **Process Flowcharts**: In business and manufacturing, block diagrams can be employed to create process flowcharts. These flowcharts represent various stages of a business or manufacturing process, helping to visualize the sequence of steps, decision points, and the flow of control.

- **Electrical Systems**: Engineers use block diagrams to represent electrical systems and circuitry. They can illustrate the high-level structure of an electrical system, the interaction between different electrical components, and the flow of electrical currents.

- **Educational Purposes**: Block diagrams are also extensively used in educational materials to explain complex concepts and systems in a simplified manner. They help in breaking down and visualizing scientific theories, engineering principles, and technological systems.

These examples demonstrate the versatility of block diagrams in providing clear and concise representations of complex systems. Their simplicity and clarity make them a valuable tool for professionals across various fields to communicate complex ideas effectively.

In the following sections, we will delve into the specifics of creating and manipulating block diagrams using Mermaid, covering everything from basic syntax to advanced configurations and styling.

Creating block diagrams with Mermaid is straightforward and accessible. This section introduces the basic syntax and structure needed to start building simple diagrams. Understanding these foundational concepts is key to efficiently utilizing Mermaid for more complex diagramming tasks.

### Simple Block Diagrams

#### Basic Structure

At its core, a block diagram consists of blocks representing different entities or components. In Mermaid, these blocks are easily created using simple text labels. The most basic form of a block diagram can be a series of blocks without any connectors.

**Example - Simple Block Diagram**:
To create a simple block diagram with three blocks labeled 'a', 'b', and 'c', the syntax is as follows:

mermaid-example
block-beta
  a b c


mermaid
block-beta
  a b c


This example will produce a horizontal sequence of three blocks. Each block is automatically spaced and aligned for optimal readability.

### Defining the number of columns to use

#### Column Usage

While simple block diagrams are linear and straightforward, more complex systems may require a structured layout. Mermaid allows for the organization of blocks into multiple columns, facilitating the creation of more intricate and detailed diagrams.

**Example - Multi-Column Diagram:**
In scenarios where you need to distribute blocks across multiple columns, you can specify the number of columns and arrange the blocks accordingly. Here's how to create a block diagram with three columns and four blocks, where the fourth block appears in a second row:

mermaid-example
block-beta
  columns 3
  a b c d


mermaid
block-beta
  columns 3
  a b c d


This syntax instructs Mermaid to arrange the blocks 'a', 'b', 'c', and 'd' across three columns, wrapping to the next row as needed. This feature is particularly useful for representing layered or multi-tiered systems, such as network layers or hierarchical structures.

These basic building blocks of Mermaid's block diagrams provide a foundation for more complex diagramming. The simplicity of the syntax allows for quick creation and iteration of diagrams, making it an efficient tool for visualizing ideas and concepts. In the next section, we'll explore advanced block configuration options, including setting block widths and creating composite blocks.

## 3. Advanced Block Configuration

Building upon the basics, this section delves into more advanced features of block diagramming in Mermaid. These features allow for greater flexibility and complexity in diagram design, accommodating a wider range of use cases and scenarios.

### Setting Block Width

#### Spanning Multiple Columns

In more complex diagrams, you may need blocks that span multiple columns to emphasize certain components or to represent larger entities. Mermaid allows for the adjustment of block widths to cover multiple columns, enhancing the diagram's readability and structure.

**Example - Block Spanning Multiple Columns**:
To create a block diagram where one block spans across two columns, you can specify the desired width for each block:

mermaid-example
block-beta
  columns 3
  a["A label"] b:2 c:2 d


mermaid
block-beta
  columns 3
  a["A label"] b:2 c:2 d


In this example, the block labeled "A wide one" spans two columns, while blocks 'b', 'c', and 'd' are allocated their own columns. This flexibility in block sizing is crucial for accurately representing systems with components of varying significance or size.

### Creating Composite Blocks

#### Nested Blocks

Composite blocks, or blocks within blocks, are an advanced feature in Mermaid's block diagram syntax. They allow for the representation of nested or hierarchical systems, where one component encompasses several subcomponents.

**Example - Composite Blocks:**
Creating a composite block involves defining a parent block and then nesting other blocks within it. Here's how to define a composite block with nested elements:

mermaid-example
block-beta
    block
      D
    end
    A["A: I am a wide one"]


mermaid
block-beta
    block
      D
    end
    A["A: I am a wide one"]


In this syntax, 'D' is a nested block within a larger parent block. This feature is particularly useful for depicting complex structures, such as a server with multiple services or a department within a larger organizational framework.

### Column Width Dynamics

#### Adjusting Widths

Mermaid also allows for dynamic adjustment of column widths based on the content of the blocks. The width of the columns is determined by the widest block in the column, ensuring that the diagram remains balanced and readable.

**Example - Dynamic Column Widths:**
In diagrams with varying block sizes, Mermaid automatically adjusts the column widths to fit the largest block in each column. Here's an example:

mermaid-example
block-beta
  columns 3
  a:3
  block:group1:2
    columns 2
    h i j k
  end
  g
  block:group2:3
    %% columns auto (default)
    l m n o p q r
  end


mermaid
block-beta
  columns 3
  a:3
  block:group1:2
    columns 2
    h i j k
  end
  g
  block:group2:3
    %% columns auto (default)
    l m n o p q r
  end


This example demonstrates how Mermaid dynamically adjusts the width of the columns to accommodate the widest block, in this case, 'a' and the composite block 'e'. This dynamic adjustment is essential for creating visually balanced and easy-to-understand diagrams.

With these advanced configuration options, Mermaid's block diagrams can be tailored to represent a wide array of complex systems and structures. The flexibility offered by these features enables users to create diagrams that are both informative and visually appealing. In the following sections, we will explore further capabilities, including different block shapes and linking options.

## 4. Block Varieties and Shapes

Mermaid's block diagrams are not limited to standard rectangular shapes. A variety of block shapes are available, allowing for a more nuanced and tailored representation of different types of information or entities. This section outlines the different block shapes you can use in Mermaid and their specific applications.

### Standard and Special Block Shapes

Mermaid supports a range of block shapes to suit different diagramming needs, from basic geometric shapes to more specialized forms.

#### Example - Round Edged Block

To create a block with round edges, which can be used to represent a softer or more flexible component:

mermaid-example
block-beta
    id1("This is the text in the box")


mermaid
block-beta
    id1("This is the text in the box")


#### Example - Stadium-Shaped Block

A stadium-shaped block, resembling an elongated circle, can be used for components that are process-oriented:

mermaid-example
block-beta
    id1(["This is the text in the box"])


mermaid
block-beta
    id1(["This is the text in the box"])


#### Example - Subroutine Shape

For representing subroutines or contained processes, a block with double vertical lines is useful:

mermaid-example
block-beta
    id1[["This is the text in the box"]]


mermaid
block-beta
    id1[["This is the text in the box"]]


#### Example - Cylindrical Shape

The cylindrical shape is ideal for representing databases or storage components:

mermaid-example
block-beta
    id1[("Database")]


mermaid
block-beta
    id1[("Database")]


#### Example - Circle Shape

A circle can be used for centralized or pivotal components:

mermaid-example
block-beta
    id1(("This is the text in the circle"))


mermaid
block-beta
    id1(("This is the text in the circle"))


#### Example - Asymmetric, Rhombus, and Hexagon Shapes

For decision points, use a rhombus, and for unique or specialized processes, asymmetric and hexagon shapes can be utilized:

**Asymmetric**

mermaid-example
block-beta
  id1>"This is the text in the box"]


mermaid
block-beta
  id1>"This is the text in the box"]


**Rhombus**

mermaid-example
block-beta
    id1{"This is the text in the box"}


mermaid
block-beta
    id1{"This is the text in the box"}


**Hexagon**

mermaid-example
block-beta
    id1{{"This is the text in the box"}}


mermaid
block-beta
    id1{{"This is the text in the box"}}


#### Example - Parallelogram and Trapezoid Shapes

Parallelogram and trapezoid shapes are perfect for inputs/outputs and transitional processes:

mermaid-example
block-beta
  id1[/"This is the text in the box"/]
  id2[\"This is the text in the box"\]
  A[/"Christmas"\]
  B[\"Go shopping"/]


mermaid
block-beta
  id1[/"This is the text in the box"/]
  id2[\"This is the text in the box"\]
  A[/"Christmas"\]
  B[\"Go shopping"/]


#### Example - Double Circle

For highlighting critical or high-priority components, a double circle can be effective:

mermaid-example
block-beta
    id1((("This is the text in the circle")))


mermaid
block-beta
    id1((("This is the text in the circle")))


### Block Arrows and Space Blocks

Mermaid also offers unique shapes like block arrows and space blocks for directional flow and spacing.

#### Example - Block Arrows

Block arrows can visually indicate direction or flow within a process:

mermaid-example
block-beta
  blockArrowId<["Label"]>(right)
  blockArrowId2<["Label"]>(left)
  blockArrowId3<["Label"]>(up)
  blockArrowId4<["Label"]>(down)
  blockArrowId5<["Label"]>(x)
  blockArrowId6<["Label"]>(y)
  blockArrowId6<["Label"]>(x, down)


mermaid
block-beta
  blockArrowId<["Label"]>(right)
  blockArrowId2<["Label"]>(left)
  blockArrowId3<["Label"]>(up)
  blockArrowId4<["Label"]>(down)
  blockArrowId5<["Label"]>(x)
  blockArrowId6<["Label"]>(y)
  blockArrowId6<["Label"]>(x, down)


#### Example - Space Blocks

Space blocks can be used to create intentional empty spaces in the diagram, which is useful for layout and readability:

mermaid-example
block-beta
  columns 3
  a space b
  c   d   e


mermaid
block-beta
  columns 3
  a space b
  c   d   e


or

mermaid-example
block-beta
  ida space:3 idb idc


mermaid
block-beta
  ida space:3 idb idc


Note that you can set how many columns the space block occupied using the number notation space:num where num is a number indicating the num columns width. You can also use space which defaults to one column.

The variety of shapes and special blocks in Mermaid enhances the expressive power of block diagrams, allowing for more accurate and context-specific representations. These options give users the flexibility to create diagrams that are both informative and visually appealing. In the next sections, we will explore the ways to connect these blocks and customize their appearance.

### Standard and Special Block Shapes

Discuss the various shapes available for blocks, including standard shapes and special forms like block arrows and space blocks.

## 5. Connecting Blocks with Edges

One of the key features of block diagrams in Mermaid is the ability to connect blocks using various types of edges or links. This section explores the different ways blocks can be interconnected to represent relationships and flows between components.

### Basic Linking and Arrow Types

The most fundamental aspect of connecting blocks is the use of arrows or links. These connectors depict the relationships or the flow of information between the blocks. Mermaid offers a range of arrow types to suit different diagramming needs.

**Example - Basic Links**

A simple link with an arrow can be created to show direction or flow from one block to another:

mermaid-example
block-beta
  A space B
  A-->B


mermaid
block-beta
  A space B
  A-->B


This example illustrates a direct connection from block 'A' to block 'B', using a straightforward arrow.

This syntax creates a line connecting 'A' and 'B', implying a relationship or connection without indicating a specific direction.

### Text on Links

In addition to connecting blocks, it's often necessary to describe or label the relationship. Mermaid allows for the inclusion of text on links, providing context to the connections.

Example - Text with Links
To add text to a link, the syntax includes the text within the link definition:

mermaid-example
block-beta
  A space:2 B
  A-- "X" -->B


mermaid
block-beta
  A space:2 B
  A-- "X" -->B


This example show how to add descriptive text to the links, enhancing the information conveyed by the diagram.

Example - Edges and Styles:

mermaid-example
block-beta
columns 1
  db(("DB"))
  blockArrowId6<["&nbsp;&nbsp;&nbsp;"]>(down)
  block:ID
    A
    B["A wide one in the middle"]
    C
  end
  space
  D
  ID --> D
  C --> D
  style B fill:#939,stroke:#333,stroke-width:4px


mermaid
block-beta
columns 1
  db(("DB"))
  blockArrowId6<["&nbsp;&nbsp;&nbsp;"]>(down)
  block:ID
    A
    B["A wide one in the middle"]
    C
  end
  space
  D
  ID --> D
  C --> D
  style B fill:#939,stroke:#333,stroke-width:4px


## 6. Styling and Customization

Beyond the structure and layout of block diagrams, Mermaid offers extensive styling options. These customization features allow for the creation of more visually distinctive and informative diagrams. This section covers how to apply individual styles to blocks and how to use classes for consistent styling across multiple elements.

### Individual Block Styling

Mermaid enables detailed styling of individual blocks, allowing you to apply various CSS properties such as color, stroke, and border thickness. This feature is especially useful for highlighting specific parts of a diagram or for adhering to certain visual themes.

#### Example - Styling a Single Block

To apply custom styles to a block, you can use the style keyword followed by the block identifier and the desired CSS properties:

mermaid-example
block-beta
  id1 space id2
  id1("Start")-->id2("Stop")
  style id1 fill:#636,stroke:#333,stroke-width:4px
  style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5


mermaid
block-beta
  id1 space id2
  id1("Start")-->id2("Stop")
  style id1 fill:#636,stroke:#333,stroke-width:4px
  style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5


In this example, a class named 'blue' is defined and applied to block 'A', while block 'B' receives individual styling. This demonstrates the flexibility of Mermaid in applying both shared and unique styles within the same diagram.

The ability to style blocks individually or through classes provides a powerful tool for enhancing the visual impact and clarity of block diagrams. Whether emphasizing certain elements or maintaining a cohesive design across the diagram, these styling capabilities are central to effective diagramming. The next sections will present practical examples and use cases, followed by tips for troubleshooting common issues.

### 7. Practical Examples and Use Cases

The versatility of Mermaid's block diagrams becomes evident when applied to real-world scenarios. This section provides practical examples demonstrating the application of various features discussed in previous sections. These examples showcase how block diagrams can be used to represent complex systems and processes in an accessible and informative manner.

### Detailed Examples Illustrating Various Features

Combining the elements of structure, linking, and styling, we can create comprehensive diagrams that serve specific purposes in different contexts.

#### Example - System Architecture

Illustrating a simple software system architecture with interconnected components:

mermaid-example
block-beta
  columns 3
  Frontend blockArrowId6<[" "]>(right) Backend
  space:2 down<[" "]>(down)
  Disk left<[" "]>(left) Database[("Database")]

  classDef front fill:#696,stroke:#333;
  classDef back fill:#969,stroke:#333;
  class Frontend front
  class Backend,Database back


mermaid
block-beta
  columns 3
  Frontend blockArrowId6<[" "]>(right) Backend
  space:2 down<[" "]>(down)
  Disk left<[" "]>(left) Database[("Database")]

  classDef front fill:#696,stroke:#333;
  classDef back fill:#969,stroke:#333;
  class Frontend front
  class Backend,Database back


This example shows a basic architecture with a frontend, backend, and database. The blocks are styled to differentiate between types of components.

#### Example - Business Process Flow

Representing a business process flow with decision points and multiple stages:

mermaid-example
block-beta
  columns 3
  Start(("Start")) space:2
  down<[" "]>(down) space:2
  Decision{{"Make Decision"}} right<["Yes"]>(right) Process1["Process A"]
  downAgain<["No"]>(down) space r3<["Done"]>(down)
  Process2["Process B"] r2<["Done"]>(right) End(("End"))

  style Start fill:#969;
  style End fill:#696;


mermaid
block-beta
  columns 3
  Start(("Start")) space:2
  down<[" "]>(down) space:2
  Decision{{"Make Decision"}} right<["Yes"]>(right) Process1["Process A"]
  downAgain<["No"]>(down) space r3<["Done"]>(down)
  Process2["Process B"] r2<["Done"]>(right) End(("End"))

  style Start fill:#969;
  style End fill:#696;


These practical examples and scenarios underscore the utility of Mermaid block diagrams in simplifying and effectively communicating complex information across various domains.

The next section, 'Troubleshooting and Common Issues', will provide insights into resolving common challenges encountered when working with Mermaid block diagrams, ensuring a smooth diagramming experience.

## 8. Troubleshooting and Common Issues

Working with Mermaid block diagrams can sometimes present challenges, especially as the complexity of the diagrams increases. This section aims to provide guidance on resolving common issues and offers tips for managing more intricate diagram structures.

### Common Syntax Errors

Understanding and avoiding common syntax errors is key to a smooth experience with Mermaid diagrams.

#### Example - Incorrect Linking

A common mistake is incorrect linking syntax, which can lead to unexpected results or broken diagrams:


block-beta
  A - B


**Correction**:
Ensure that links between blocks are correctly specified with arrows (--> or ---) to define the direction and type of connection. Also remember that one of the fundaments for block diagram is to give the author full control of where the boxes are positioned so in the example you need to add a space between the boxes:

mermaid-example
block-beta
  A space B
  A --> B


mermaid
block-beta
  A space B
  A --> B


#### Example - Misplaced Styling

Applying styles in the wrong context or with incorrect syntax can lead to blocks not being styled as intended:

mermaid-example
  block-beta
    A
    style A fill#969;


mermaid
  block-beta
    A
    style A fill#969;


**Correction:**
Correct the syntax by ensuring proper separation of style properties with commas and using the correct CSS property format:

mermaid-example
block-beta
  A
  style A fill:#969,stroke:#333;



mermaid
block-beta
  A
  style A fill:#969,stroke:#333;



### Tips for Complex Diagram Structures

Managing complexity in Mermaid diagrams involves planning and employing best practices.

#### Modular Design

Break down complex diagrams into smaller, more manageable components. This approach not only makes the diagram easier to understand but also simplifies the creation and maintenance process.

#### Consistent Styling

Use classes to maintain consistent styling across similar elements. This not only saves time but also ensures a cohesive and professional appearance.

#### Comments and Documentation

Use comments with %% within the Mermaid syntax to document the purpose of various parts of the diagram. This practice is invaluable for maintaining clarity, especially when working in teams or returning to a diagram after some time.

With these troubleshooting tips and best practices, you can effectively manage and resolve common issues in Mermaid block diagrams. The final section, 'Conclusion', will summarize the key points covered in this documentation and invite user feedback for continuous improvement.


# Entity Relationship Diagrams

> An entity–relationship model (or ER model) describes interrelated things of interest in a specific domain of knowledge. A basic ER model is composed of entity types (which classify the things of interest) and specifies relationships that can exist between entities (instances of those entity types) [Wikipedia](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model).

Note that practitioners of ER modelling almost always refer to _entity types_ simply as _entities_. For example the CUSTOMER entity _type_ would be referred to simply as the CUSTOMER entity. This is so common it would be inadvisable to do anything else, but technically an entity is an abstract _instance_ of an entity type, and this is what an ER diagram shows - abstract instances, and the relationships between them. This is why entities are always named using singular nouns.

Mermaid can render ER diagrams

mermaid-example
---
title: Order example
---
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses


Entity names are often capitalised, although there is no accepted standard on this, and it is not required in Mermaid.

Relationships between entities are represented by lines with end markers representing cardinality. Mermaid uses the most popular crow's foot notation. The crow's foot intuitively conveys the possibility of many instances of the entity that it connects to.

ER diagrams can be used for various purposes, ranging from abstract logical models devoid of any implementation details, through to physical models of relational database tables. It can be useful to include attribute definitions on ER diagrams to aid comprehension of the purpose and meaning of entities. These do not necessarily need to be exhaustive; often a small subset of attributes is enough. Mermaid allows them to be defined in terms of their _type_ and _name_.

mermaid-example
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }


When including attributes on ER diagrams, you must decide whether to include foreign keys as attributes. This probably depends on how closely you are trying to represent relational table structures. If your diagram is a _logical_ model which is not meant to imply a relational implementation, then it is better to leave these out because the associative relationships already convey the way that entities are associated. For example, a JSON data structure can implement a one-to-many relationship without the need for foreign key properties, using arrays. Similarly an object-oriented programming language may use pointers or references to collections. Even for models that are intended for relational implementation, you might decide that inclusion of foreign key attributes duplicates information already portrayed by the relationships, and does not add meaning to entities. Ultimately, it's your choice.

## Syntax

### Entities and Relationships

Mermaid syntax for ER diagrams is compatible with PlantUML, with an extension to label the relationship. Each statement consists of the following parts:


    <first-entity> [<relationship> <second-entity> : <relationship-label>]


Where:

- first-entity is the name of an entity. Names must begin with an alphabetic character or an underscore (from v10.5.0+), and may also contain digits and hyphens.
- relationship describes the way that both entities inter-relate. See below.
- second-entity is the name of the other entity.
- relationship-label describes the relationship from the perspective of the first entity.

For example:


    PROPERTY ||--|{ ROOM : contains


This statement can be read as _a property contains one or more rooms, and a room is part of one and only one property_. You can see that the label here is from the first entity's perspective: a property contains a room, but a room does not contain a property. When considered from the perspective of the second entity, the equivalent label is usually very easy to infer. (Some ER diagrams label relationships from both perspectives, but this is not supported here, and is usually superfluous).

Only the first-entity part of a statement is mandatory. This makes it possible to show an entity with no relationships, which can be useful during iterative construction of diagrams. If any other parts of a statement are specified, then all parts are mandatory.

### Relationship Syntax

The relationship part of each statement can be broken down into three sub-components:

- the cardinality of the first entity with respect to the second
- whether the relationship confers identity on a 'child' entity
- the cardinality of the second entity with respect to the first

Cardinality is a property that describes how many elements of another entity can be related to the entity in question. In the above example a PROPERTY can have one or more ROOM instances associated to it, whereas a ROOM can only be associated with one PROPERTY. In each cardinality marker there are two characters. The outermost character represents a maximum value, and the innermost character represents a minimum value. The table below summarises possible cardinalities.

| Value (left) | Value (right) | Meaning                       |
| :----------: | :-----------: | ----------------------------- |
|    \|o     |     o\|     | Zero or one                   |
|    \|\|    |    \|\|     | Exactly one                   |
|     }o     |     o{      | Zero or more (no upper limit) |
|    }\|     |     \|{     | One or more (no upper limit)  |

**Aliases**

| Value (left) | Value (right) | Alias for    |
| :----------: | :-----------: | ------------ |
| one or zero  |  one or zero  | Zero or one  |
| zero or one  |  zero or one  | Zero or one  |
| one or more  |  one or more  | One or more  |
| one or many  |  one or many  | One or more  |
|   many(1)    |    many(1)    | One or more  |
|      1+      |      1+       | One or more  |
| zero or more | zero or more  | Zero or more |
| zero or many | zero or many  | Zero or more |
|   many(0)    |    many(1)    | Zero or more |
|      0+      |      0+       | Zero or more |
|   only one   |   only one    | Exactly one  |
|      1       |       1       | Exactly one  |

### Identification

Relationships may be classified as either _identifying_ or _non-identifying_ and these are rendered with either solid or dashed lines respectively. This is relevant when one of the entities in question can not have independent existence without the other. For example a firm that insures people to drive cars might need to store data on NAMED-DRIVERs. In modelling this we might start out by observing that a CAR can be driven by many PERSON instances, and a PERSON can drive many CARs - both entities can exist without the other, so this is a non-identifying relationship that we might specify in Mermaid as: PERSON }|..|{ CAR : "driver". Note the two dots in the middle of the relationship that will result in a dashed line being drawn between the two entities. But when this many-to-many relationship is resolved into two one-to-many relationships, we observe that a NAMED-DRIVER cannot exist without both a PERSON and a CAR - the relationships become identifying and would be specified using hyphens, which translate to a solid line:

**Aliases**

|     Value     |     Alias for     |
| :-----------: | :---------------: |
|      to       |   _identifying_   |
| optionally to | _non-identifying_ |

mermaid
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    PERSON ||--o{ NAMED-DRIVER : is


### Attributes

Attributes can be defined for entities by specifying the entity name followed by a block containing multiple type name pairs, where a block is delimited by an opening { and a closing }. The attributes are rendered inside the entity boxes. For example:

mermaid-example
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string firstName
        string lastName
        int age
    }


The type values must begin with an alphabetic character and may contain digits, hyphens, underscores, parentheses and square brackets. The name values follow a similar format to type, but may start with an asterisk as another option to indicate an attribute is a primary key. Other than that, there are no restrictions, and there is no implicit set of valid data types.

### Entity Name Aliases (v10.5.0+)

An alias can be added to an entity using square brackets. If provided, the alias will be showed in the diagram instead of the entity name.

mermaid-example
erDiagram
    p[Person] {
        string firstName
        string lastName
    }
    a["Customer Account"] {
        string email
    }
    p ||--o| a : has


#### Attribute Keys and Comments

Attributes may also have a key or comment defined. Keys can be PK, FK or UK, for Primary Key, Foreign Key or Unique Key. To specify multiple key constraints on a single attribute, separate them with a comma (e.g., PK, FK). A comment is defined by double quotes at the end of an attribute. Comments themselves cannot have double-quote characters in them.

mermaid-example
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber PK
        string make
        string model
        string[] parts
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string driversLicense PK "The license #"
        string(99) firstName "Only 99 characters are allowed"
        string lastName
        string phone UK
        int age
    }
    NAMED-DRIVER {
        string carRegistrationNumber PK, FK
        string driverLicence PK, FK
    }
    MANUFACTURER only one to zero or more CAR : makes


### Other Things

- If you want the relationship label to be more than one word, you must use double quotes around the phrase
- If you don't want a label at all on a relationship, you must use an empty double-quoted string

## Styling

### Config options

For simple color customization:

| Name     | Used as                                                              |
| :------- | :------------------------------------------------------------------- |
| fill   | Background color of an entity or attribute                           |
| stroke | Border color of an entity or attribute, line color of a relationship |

### Classes used

The following CSS class selectors are available for richer styling:

| Selector                   | Description                                           |
| :------------------------- | :---------------------------------------------------- |
| .er.attributeBoxEven     | The box containing attributes on even-numbered rows   |
| .er.attributeBoxOdd      | The box containing attributes on odd-numbered rows    |
| .er.entityBox            | The box representing an entity                        |
| .er.entityLabel          | The label for an entity                               |
| .er.relationshipLabel    | The label for a relationship                          |
| .er.relationshipLabelBox | The box surrounding a relationship label              |
| .er.relationshipLine     | The line representing a relationship between entities |

<!--- cspell:locale en,en-gb --->

# Class diagrams

> "In software engineering, a class diagram in the Unified Modeling Language (UML) is a type of static structure diagram that describes the structure of a system by showing the system's classes, their attributes, operations (or methods), and the relationships among objects."
>
> -Wikipedia

The class diagram is the main building block of object-oriented modeling. It is used for general conceptual modeling of the structure of the application, and for detailed modeling to translate the models into programming code. Class diagrams can also be used for data modeling. The classes in a class diagram represent both the main elements, interactions in the application, and the classes to be programmed.

Mermaid can render class diagrams.

mermaid-example
---
title: Animal example
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }


## Syntax

### Class

UML provides mechanisms to represent class members, such as attributes and methods, and additional information about them.
A single instance of a class in the diagram contains three compartments:

- The top compartment contains the name of the class. It is printed in bold and centered, and the first letter is capitalized. It may also contain optional annotation text describing the nature of the class.
- The middle compartment contains the attributes of the class. They are left-aligned and the first letter is lowercase.
- The bottom compartment contains the operations the class can execute. They are also left-aligned and the first letter is lowercase.

mermaid-example
---
title: Bank example
---
classDiagram
    class BankAccount
    BankAccount : +String owner
    BankAccount : +Bigdecimal balance
    BankAccount : +deposit(amount)
    BankAccount : +withdrawal(amount)



## Define a class

There are two ways to define a class:

- Explicitly using keyword **class** like class Animal which would define the Animal class.
- Via a **relationship** which defines two classes at a time along with their relationship. For instance, Vehicle <|-- Car.

mermaid-example
classDiagram
    class Animal
    Vehicle <|-- Car


Naming convention: a class name should be composed only of alphanumeric characters (including unicode), underscores, and dashes (-).

### Class labels

In case you need to provide a label for a class, you can use the following syntax:

mermaid-example
classDiagram
    class Animal["Animal with a label"]
    class Car["Car with *! symbols"]
    Animal --> Car


You can also use backticks to escape special characters in the label:

mermaid-example
classDiagram
    class Animal Class!
    class Car Class
    Animal Class! --> Car Class


## Defining Members of a class

UML provides mechanisms to represent class members such as attributes and methods, as well as additional information about them.

Mermaid distinguishes between attributes and functions/methods based on if the **parenthesis** () are present or not. The ones with () are treated as functions/methods, and all others as attributes.

There are two ways to define the members of a class, and regardless of whichever syntax is used to define the members, the output will still be same. The two different ways are :

- Associate a member of a class using **:** (colon) followed by member name, useful to define one member at a time. For example:

mermaid-example
classDiagram
class BankAccount
BankAccount : +String owner
BankAccount : +BigDecimal balance
BankAccount : +deposit(amount)
BankAccount : +withdrawal(amount)


- Associate members of a class using **{}** brackets, where members are grouped within curly brackets. Suitable for defining multiple members at once. For example:

mermaid-example
classDiagram
class BankAccount{
    +String owner
    +BigDecimal balance
    +deposit(amount)
    +withdrawal(amount)
}


#### Return Type

Optionally you can end a method/function definition with the data type that will be returned (note: there must be a space between the final ) and the return type). An example:

mermaid-example
classDiagram
class BankAccount{
    +String owner
    +BigDecimal balance
    +deposit(amount) bool
    +withdrawal(amount) int
}


#### Generic Types

Generics can be represented as part of a class definition, and for class members/return types. In order to denote an item as generic, you enclose that type within ~ (**tilde**). **Nested** type declarations such as List<List<int>> are supported, though generics that include a comma are currently not supported. (such as List<List<K, V>>)

> _note_ when a generic is used within a class definition, the generic type is NOT considered part of the class name. i.e.: for any syntax which required you to reference the class name, you need to drop the type part of the definition. This also means that mermaid does not currently support having two classes with the same name, but different generic types.

mermaid-example
classDiagram
class Square~Shape~{
    int id
    List~int~ position
    setPoints(List~int~ points)
    getPoints() List~int~
}

Square : -List~string~ messages
Square : +setMessages(List~string~ messages)
Square : +getMessages() List~string~
Square : +getDistanceMatrix() List~List~int~~


#### Visibility

To describe the visibility (or encapsulation) of an attribute or method/function that is a part of a class (i.e. a class member), optional notation may be placed before that members' name:

- + Public
- - Private
- # Protected
- ~ Package/Internal

> _note_ you can also include additional _classifiers_ to a method definition by adding the following notation to the _end_ of the method, i.e.: after the () or after the return type:
>
> - * Abstract e.g.: someAbstractMethod()* or someAbstractMethod() int*
> - $ Static e.g.: someStaticMethod()$ or someStaticMethod() String$

> _note_ you can also include additional _classifiers_ to a field definition by adding the following notation to the very end:
>
> - $ Static e.g.: String someField$

## Defining Relationship

A relationship is a general term covering the specific types of logical connections found on class and object diagrams.


[classA][Arrow][ClassB]


There are eight different types of relations defined for classes under UML which are currently supported:

| Type    | Description   |
| ------- | ------------- |
| <\|-- | Inheritance   |
| *--   | Composition   |
| o--   | Aggregation   |
| -->   | Association   |
| --    | Link (Solid)  |
| ..>   | Dependency    |
| ..\|> | Realization   |
| ..    | Link (Dashed) |

mermaid-example
classDiagram
classA <|-- classB
classC *-- classD
classE o-- classF
classG <-- classH
classI -- classJ
classK <.. classL
classM <|.. classN
classO .. classP



We can use the labels to describe the nature of the relation between two classes. Also, arrowheads can be used in the opposite direction as well:

mermaid-example
classDiagram
classA --|> classB : Inheritance
classC --* classD : Composition
classE --o classF : Aggregation
classG --> classH : Association
classI -- classJ : Link(Solid)
classK ..> classL : Dependency
classM ..|> classN : Realization
classO .. classP : Link(Dashed)



### Labels on Relations

It is possible to add label text to a relation:


[classA][Arrow][ClassB]:LabelText


mermaid-example
classDiagram
classA <|-- classB : implements
classC *-- classD : composition
classE o-- classF : aggregation


### Two-way relations

Relations can logically represent an N:M association:

mermaid
classDiagram
    Animal <|--|> Zebra


Here is the syntax:


[Relation Type][Link][Relation Type]


Where Relation Type can be one of:

| Type  | Description |
| ----- | ----------- |
| <\| | Inheritance |
| \*  | Composition |
| o   | Aggregation |
| >   | Association |
| <   | Association |
| \|> | Realization |

And Link can be one of:

| Type | Description |
| ---- | ----------- |
| --   | Solid       |
| ..   | Dashed      |

## Define Namespace

A namespace groups classes.

mermaid-example
classDiagram
namespace BaseShapes {
    class Triangle
    class Rectangle {
      double width
      double height
    }
}


## Cardinality / Multiplicity on relations

Multiplicity or cardinality in class diagrams indicates the number of instances of one class that can be linked to an instance of the other class. For example, each company will have one or more employees (not zero), and each employee currently works for zero or one companies.

Multiplicity notations are placed near the end of an association.

The different cardinality options are :

- 1 Only 1
- 0..1 Zero or One
- 1..* One or more
- * Many
- n n (where n>1)
- 0..n zero to n (where n>1)
- 1..n one to n (where n>1)

Cardinality can be easily defined by placing the text option within quotes " before or after a given arrow. For example:


[classA] "cardinality1" [Arrow] "cardinality2" [ClassB]:LabelText


mermaid-example
classDiagram
    Customer "1" --> "*" Ticket
    Student "1" --> "1..*" Course
    Galaxy --> "many" Star : Contains


## Annotations on classes

It is possible to annotate classes with markers to provide additional metadata about the class. This can give a clearer indication about its nature. Some common annotations include:

- <<Interface>> To represent an Interface class
- <<Abstract>> To represent an abstract class
- <<Service>> To represent a service class
- <<Enumeration>> To represent an enum

Annotations are defined within the opening << and closing >>. There are two ways to add an annotation to a class, and either way the output will be same:

- In a **_separate line_** after a class is defined:

mermaid-example
classDiagram
class Shape
<<interface>> Shape
Shape : noOfVertices
Shape : draw()


- In a **_nested structure_** along with the class definition:

mermaid-example
classDiagram
class Shape{
    <<interface>>
    noOfVertices
    draw()
}
class Color{
    <<enumeration>>
    RED
    BLUE
    GREEN
    WHITE
    BLACK
}



## Comments

Comments can be entered within a class diagram, which will be ignored by the parser. Comments need to be on their own line, and must be prefaced with %% (double percent signs). Any text until the next newline will be treated as a comment, including any class diagram syntax.

mermaid
classDiagram
%% This whole line is a comment classDiagram class Shape <<interface>>
class Shape{
    <<interface>>
    noOfVertices
    draw()
}


## Setting the direction of the diagram

With class diagrams you can use the direction statement to set the direction in which the diagram will render:

mermaid-example
classDiagram
  direction RL
  class Student {
    -idCard : IdCard
  }
  class IdCard{
    -id : int
    -name : string
  }
  class Bike{
    -id : int
    -name : string
  }
  Student "1" --o "1" IdCard : carries
  Student "1" --o "1" Bike : rides


## Interaction

It is possible to bind a click event to a node. The click can lead to either a javascript callback or to a link which will be opened in a new browser tab. **Note**: This functionality is disabled when using securityLevel='strict' and enabled when using securityLevel='loose'.

You would define these actions on a separate line after all classes have been declared.


action className "reference" "tooltip"
click className call callback() "tooltip"
click className href "url" "tooltip"


- _action_ is either link or callback, depending on which type of interaction you want to have called
- _className_ is the id of the node that the action will be associated with
- _reference_ is either the url link, or the function name for callback.
- (_optional_) tooltip is a string to be displayed when hovering over element (note: The styles of the tooltip are set by the class .mermaidTooltip.)
- note: callback function will be called with the nodeId as parameter.

## Notes

It is possible to add notes on the diagram using note "line1\nline2". A note can be added for a specific class using note for <CLASS NAME> "line1\nline2".

### Examples

mermaid
classDiagram
    note "This is a general note"
    note for MyClass "This is a note for a class"
    class MyClass{
    }


_URL Link:_

mermaid
classDiagram
class Shape
link Shape "https://www.github.com" "This is a tooltip for a link"
class Shape2
click Shape2 href "https://www.github.com" "This is a tooltip for a link"


_Callback:_

mermaid
classDiagram
class Shape
callback Shape "callbackFunction" "This is a tooltip for a callback"
class Shape2
click Shape2 call callbackFunction() "This is a tooltip for a callback"


html
<script>
  const callbackFunction = function () {
    alert('A callback was triggered');
  };
</script>


mermaid
classDiagram
    class Class01
    class Class02
    callback Class01 "callbackFunction" "Callback tooltip"
    link Class02 "https://www.github.com" "This is a link"
    class Class03
    class Class04
    click Class03 call callbackFunction() "Callback tooltip"
    click Class04 href "https://www.github.com" "This is a link"


> **Success** The tooltip functionality and the ability to link to urls are available from version 0.5.2.

Beginner's tip—a full example using interactive links in an HTML page:

html
<body>
  <pre class="mermaid">
    classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
      }
    class Fish{
      -int sizeInFeet
      -canEat()
      }
    class Zebra{
      +bool is_wild
      +run()
      }

      callback Duck callback "Tooltip"
      link Zebra "https://www.github.com" "This is a link"
  </pre>

  <script>
    const callback = function () {
      alert('A callback was triggered');
    };
    const config = {
      startOnLoad: true,
      securityLevel: 'loose',
    };
    mermaid.initialize(config);
  </script>
</body>


## Styling

### Styling a node (v10.7.0+)

It is possible to apply specific styles such as a thicker border or a different background color to an individual node using the style keyword.

mermaid-example
classDiagram
  class Animal
  class Mineral
  style Animal fill:#f9f,stroke:#333,stroke-width:4px
  style Mineral fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5


#### Classes

More convenient than defining the style every time is to define a class of styles and attach this class to the nodes that
should have a different look. This is done by predefining classes in css styles that can be applied from the graph definition using the cssClass statement or the ::: short hand.

html
<style>
  .styleClass > rect {
    fill: #ff0000;
    stroke: #ffff00;
    stroke-width: 4px;
  }
</style>


Then attaching that class to a specific node:


    cssClass "nodeId1" styleClass;


It is also possible to attach a class to a list of nodes in one statement:


    cssClass "nodeId1,nodeId2" styleClass;


A shorter form of adding a class is to attach the classname to the node using the ::: operator:

mermaid-example
classDiagram
    class Animal:::styleClass


Or:

mermaid-example
classDiagram
    class Animal:::styleClass {
        -int sizeInFeet
        -canEat()
    }


?> cssClasses cannot be added using this shorthand method at the same time as a relation statement.

?> Due to limitations with existing markup for class diagrams, it is not currently possible to define css classes within the diagram itself. **_Coming soon!_**

### Default Styles

The main styling of the class diagram is done with a preset number of css classes. During rendering these classes are extracted from the file located at src/themes/class.scss. The classes used here are described below:

| Class              | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| g.classGroup text  | Styles for general class text                                     |
| classGroup .title  | Styles for general class title                                    |
| g.classGroup rect  | Styles for class diagram rectangle                                |
| g.classGroup line  | Styles for class diagram line                                     |
| .classLabel .box   | Styles for class label box                                        |
| .classLabel .label | Styles for class label text                                       |
| composition        | Styles for composition arrow head and arrow line                  |
| aggregation        | Styles for aggregation arrow head and arrow line(dashed or solid) |
| dependency         | Styles for dependency arrow head and arrow line                   |

#### Sample stylesheet

scss
body {
  background: white;
}

g.classGroup text {
  fill: $nodeBorder;
  stroke: none;
  font-family: 'trebuchet ms', verdana, arial;
  font-family: var(--mermaid-font-family);
  font-size: 10px;

  .title {
    font-weight: bolder;
  }
}

g.classGroup rect {
  fill: $nodeBkg;
  stroke: $nodeBorder;
}

g.classGroup line {
  stroke: $nodeBorder;
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: $nodeBkg;
  opacity: 0.5;
}

.classLabel .label {
  fill: $nodeBorder;
  font-size: 10px;
}

.relation {
  stroke: $nodeBorder;
  stroke-width: 1;
  fill: none;
}

@mixin composition {
  fill: $nodeBorder;
  stroke: $nodeBorder;
  stroke-width: 1;
}

#compositionStart {
  @include composition;
}

#compositionEnd {
  @include composition;
}

@mixin aggregation {
  fill: $nodeBkg;
  stroke: $nodeBorder;
  stroke-width: 1;
}

#aggregationStart {
  @include aggregation;
}

#aggregationEnd {
  @include aggregation;
}

#dependencyStart {
  @include composition;
}

#dependencyEnd {
  @include composition;
}

#extensionStart {
  @include composition;
}

#extensionEnd {
  @include composition;
}


## Configuration

Coming soon!


---
title: Flowcharts Syntax
---

# Flowcharts - Basic Syntax

Flowcharts are composed of **nodes** (geometric shapes) and **edges** (arrows or lines). The Mermaid code defines how nodes and edges are made and accommodates different arrow types, multi-directional arrows, and any linking to and from subgraphs.

warning
If you are using the word "end" in a Flowchart node, capitalize the entire word or any of the letters (e.g., "End" or "END"), or apply this [workaround](https://github.com/mermaid-js/mermaid/issues/1444#issuecomment-639528897). Typing "end" in all lowercase letters will break the Flowchart.


warning
If you are using the letter "o" or "x" as the first letter in a connecting Flowchart node, add a space before the letter or capitalize the letter (e.g., "dev--- ops", "dev---Ops").

Typing "A---oB" will create a [circle edge](#circle-edge-example).

Typing "A---xB" will create a [cross edge](#cross-edge-example).


### A node (default)

mermaid-example
---
title: Node
---
flowchart LR
    id


note
The id is what is displayed in the box.


tip
Instead of flowchart one can also use graph.


### A node with text

It is also possible to set text in the box that differs from the id. If this is done several times, it is the last text
found for the node that will be used. Also if you define edges for the node later on, you can omit text definitions. The
one previously defined will be used when rendering the box.

mermaid-example
---
title: Node with text
---
flowchart LR
    id1[This is the text in the box]


#### Unicode text

Use " to enclose the unicode text.

mermaid-example
flowchart LR
    id["This ❤ Unicode"]


#### Markdown formatting

Use double quotes and backticks "\ text \" to enclose the markdown text.

mermaid-example
%%{init: {"flowchart": {"htmlLabels": false}} }%%
flowchart LR
    markdown["This **is** _Markdown_"]
    newLines["Line1
    Line 2
    Line 3"]
    markdown --> newLines


### Direction

This statement declares the direction of the Flowchart.

This declares the flowchart is oriented from top to bottom (TD or TB).

mermaid-example
flowchart TD
    Start --> Stop


This declares the flowchart is oriented from left to right (LR).

mermaid-example
flowchart LR
    Start --> Stop


Possible FlowChart orientations are:

- TB - Top to bottom
- TD - Top-down/ same as top to bottom
- BT - Bottom to top
- RL - Right to left
- LR - Left to right

## Node shapes

### A node with round edges

mermaid-example
flowchart LR
    id1(This is the text in the box)


### A stadium-shaped node

mermaid-example
flowchart LR
    id1([This is the text in the box])


### A node in a subroutine shape

mermaid-example
flowchart LR
    id1[[This is the text in the box]]


### A node in a cylindrical shape

mermaid-example
flowchart LR
    id1[(Database)]


### A node in the form of a circle

mermaid-example
flowchart LR
    id1((This is the text in the circle))


### A node in an asymmetric shape

mermaid-example
flowchart LR
    id1>This is the text in the box]


Currently only the shape above is possible and not its mirror. _This might change with future releases._

### A node (rhombus)

mermaid-example
flowchart LR
    id1{This is the text in the box}


### A hexagon node

mermaid-example
flowchart LR
    id1{{This is the text in the box}}


### Parallelogram

mermaid-example
flowchart TD
    id1[/This is the text in the box/]


### Parallelogram alt

mermaid-example
flowchart TD
    id1[\This is the text in the box\]


### Trapezoid

mermaid-example
flowchart TD
    A[/Christmas\]


### Trapezoid alt

mermaid-example
flowchart TD
    B[\Go shopping/]


### Double circle

mermaid-example
flowchart TD
    id1(((This is the text in the circle)))


## Links between nodes

Nodes can be connected with links/edges. It is possible to have different types of links or attach a text string to a link.

### A link with arrow head

mermaid-example
flowchart LR
    A-->B


### An open link

mermaid-example
flowchart LR
    A --- B


### Text on links

mermaid-example
flowchart LR
    A-- This is the text! ---B


or

mermaid-example
flowchart LR
    A---|This is the text|B


### A link with arrow head and text

mermaid-example
flowchart LR
    A-->|text|B


or

mermaid-example
flowchart LR
    A-- text -->B


### Dotted link

mermaid-example
flowchart LR
   A-.->B;


### Dotted link with text

mermaid-example
flowchart LR
   A-. text .-> B


### Thick link

mermaid-example
flowchart LR
   A ==> B


### Thick link with text

mermaid-example
flowchart LR
   A == text ==> B


### An invisible link

This can be a useful tool in some instances where you want to alter the default positioning of a node.

mermaid-example
flowchart LR
    A ~~~ B


### Chaining of links

It is possible declare many links in the same line as per below:

mermaid-example
flowchart LR
   A -- text --> B -- text2 --> C


It is also possible to declare multiple nodes links in the same line as per below:

mermaid-example
flowchart LR
   a --> b & c--> d


You can then describe dependencies in a very expressive way. Like the one-liner below:

mermaid-example
flowchart TB
    A & B--> C & D


If you describe the same diagram using the basic syntax, it will take four lines. A
word of warning, one could go overboard with this making the flowchart harder to read in
markdown form. The Swedish word lagom comes to mind. It means, not too much and not too little.
This goes for expressive syntaxes as well.

mermaid
flowchart TB
    A --> C
    A --> D
    B --> C
    B --> D


## New arrow types

There are new types of arrows supported:

- circle edge
- cross edge

### Circle edge example

mermaid-example
flowchart LR
    A --o B


### Cross edge example

mermaid-example
flowchart LR
    A --x B


## Multi directional arrows

There is the possibility to use multidirectional arrows.

mermaid-example
flowchart LR
    A o--o B
    B <--> C
    C x--x D


### Minimum length of a link

Each node in the flowchart is ultimately assigned to a rank in the rendered
graph, i.e. to a vertical or horizontal level (depending on the flowchart
orientation), based on the nodes to which it is linked. By default, links
can span any number of ranks, but you can ask for any link to be longer
than the others by adding extra dashes in the link definition.

In the following example, two extra dashes are added in the link from node _B_
to node _E_, so that it spans two more ranks than regular links:

mermaid-example
flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]


> **Note** Links may still be made longer than the requested number of ranks
> by the rendering engine to accommodate other requests.

When the link label is written in the middle of the link, the extra dashes must
be added on the right side of the link. The following example is equivalent to
the previous one:

mermaid-example
flowchart TD
    A[Start] --> B{Is it?}
    B -- Yes --> C[OK]
    C --> D[Rethink]
    D --> B
    B -- No ----> E[End]


For dotted or thick links, the characters to add are equals signs or dots,
as summed up in the following table:

| Length            |   1    |    2    |    3     |
| ----------------- | :----: | :-----: | :------: |
| Normal            | ---  | ----  | -----  |
| Normal with arrow | -->  | --->  | ---->  |
| Thick             | ===  | ====  | =====  |
| Thick with arrow  | ==>  | ===>  | ====>  |
| Dotted            | -.-  | -..-  | -...-  |
| Dotted with arrow | -.-> | -..-> | -...-> |

## Special characters that break syntax

It is possible to put text within quotes in order to render more troublesome characters. As in the example below:

mermaid-example
flowchart LR
    id1["This is the (text) in the box"]


### Entity codes to escape characters

It is possible to escape characters using the syntax exemplified here.

mermaid-example
    flowchart LR
        A["A double quote:#quot;"] --> B["A dec char:#9829;"]


Numbers given are base 10, so # can be encoded as #35;. It is also supported to use HTML character names.

## Subgraphs


subgraph title
    graph definition
end


An example below:

mermaid-example
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end


You can also set an explicit id for the subgraph.

mermaid-example
flowchart TB
    c1-->a2
    subgraph ide1 [one]
    a1-->a2
    end


### flowcharts

With the graphtype flowchart it is also possible to set edges to and from subgraphs as in the flowchart below.

mermaid-example
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2


### Direction in subgraphs

With the graphtype flowcharts you can use the direction statement to set the direction which the subgraph will render like in this example.

mermaid-example
flowchart LR
  subgraph TOP
    direction TB
    subgraph B1
        direction RL
        i1 -->f1
    end
    subgraph B2
        direction BT
        i2 -->f2
    end
  end
  A --> TOP --> B
  B1 --> B2


#### Limitation

If any of a subgraph's nodes are linked to the outside, subgraph direction will be ignored. Instead the subgraph will inherit the direction of the parent graph:

mermaid-example
flowchart LR
    subgraph subgraph1
        direction TB
        top1[top] --> bottom1[bottom]
    end
    subgraph subgraph2
        direction TB
        top2[top] --> bottom2[bottom]
    end
    %% ^ These subgraphs are identical, except for the links to them:

    %% Link *to* subgraph1: subgraph1 direction is maintained
    outside --> subgraph1
    %% Link *within* subgraph2:
    %% subgraph2 inherits the direction of the top-level graph (LR)
    outside ---> top2


## Markdown Strings

The "Markdown Strings" feature enhances flowcharts and mind maps by offering a more versatile string type, which supports text formatting options such as bold and italics, and automatically wraps text within labels.

mermaid-example
%%{init: {"flowchart": {"htmlLabels": false}} }%%
flowchart LR
subgraph "One"
  a("The **cat**
  in the hat") -- "edge label" --> b{{"The **dog** in the hog"}}
end
subgraph "**Two**"
  c("The **cat**
  in the hat") -- "Bold **edge label**" --> d("The dog in the hog")
end


Formatting:

- For bold text, use double asterisks (**) before and after the text.
- For italics, use single asterisks (*) before and after the text.
- With traditional strings, you needed to add <br> tags for text to wrap in nodes. However, markdown strings automatically wrap text when it becomes too long and allows you to start a new line by simply using a newline character instead of a <br> tag.

This feature is applicable to node labels, edge labels, and subgraph labels.

The auto wrapping can be disabled by using


---
config:
  markdownAutoWrap: false
---
graph LR


## Interaction

It is possible to bind a click event to a node, the click can lead to either a javascript callback or to a link which will be opened in a new browser tab.

note
This functionality is disabled when using securityLevel='strict' and enabled when using securityLevel='loose'.



click nodeId callback
click nodeId call callback()


- nodeId is the id of the node
- callback is the name of a javascript function defined on the page displaying the graph, the function will be called with the nodeId as parameter.

Examples of tooltip usage below:

html
<script>
  const callback = function () {
    alert('A callback was triggered');
  };
</script>


The tooltip text is surrounded in double quotes. The styles of the tooltip are set by the class .mermaidTooltip.

mermaid-example
flowchart LR
    A-->B
    B-->C
    C-->D
    click A callback "Tooltip for a callback"
    click B "https://www.github.com" "This is a tooltip for a link"
    click C call callback() "Tooltip for a callback"
    click D href "https://www.github.com" "This is a tooltip for a link"


> **Success** The tooltip functionality and the ability to link to urls are available from version 0.5.2.

?> Due to limitations with how Docsify handles JavaScript callback functions, an alternate working demo for the above code can be viewed at [this jsfiddle](https://jsfiddle.net/Ogglas/2o73vdez/7).

Links are opened in the same browser tab/window by default. It is possible to change this by adding a link target to the click definition (_self, _blank, _parent and _top are supported):

mermaid-example
flowchart LR
    A-->B
    B-->C
    C-->D
    D-->E
    click A "https://www.github.com" _blank
    click B "https://www.github.com" "Open this in a new tab" _blank
    click C href "https://www.github.com" _blank
    click D href "https://www.github.com" "Open this in a new tab" _blank


Beginner's tip—a full example using interactive links in a html context:

html
<body>
  <pre class="mermaid">
    flowchart LR
        A-->B
        B-->C
        C-->D
        click A callback "Tooltip"
        click B "https://www.github.com" "This is a link"
        click C call callback() "Tooltip"
        click D href "https://www.github.com" "This is a link"
  </pre>

  <script>
    const callback = function () {
      alert('A callback was triggered');
    };
    const config = {
      startOnLoad: true,
      flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'cardinal' },
      securityLevel: 'loose',
    };
    mermaid.initialize(config);
  </script>
</body>


### Comments

Comments can be entered within a flow diagram, which will be ignored by the parser. Comments need to be on their own line, and must be prefaced with %% (double percent signs). Any text after the start of the comment to the next newline will be treated as a comment, including any flow syntax

mermaid
flowchart LR
%% this is a comment A -- text --> B{node}
   A -- text --> B -- text2 --> C


## Styling and classes

### Styling links

It is possible to style links. For instance, you might want to style a link that is going backwards in the flow. As links
have no ids in the same way as nodes, some other way of deciding what style the links should be attached to is required.
Instead of ids, the order number of when the link was defined in the graph is used, or use default to apply to all links.
In the example below the style defined in the linkStyle statement will belong to the fourth link in the graph:


linkStyle 3 stroke:#ff3,stroke-width:4px,color:red;


It is also possible to add style to multiple links in a single statement, by separating link numbers with commas:


linkStyle 1,2,7 color:blue;


### Styling line curves

It is possible to style the type of curve used for lines between items, if the default method does not meet your needs.
Available curve styles include basis, bumpX, bumpY, cardinal, catmullRom, linear, monotoneX, monotoneY,
natural, step, stepAfter, and stepBefore.

In this example, a left-to-right graph uses the stepBefore curve style:


%%{ init: { 'flowchart': { 'curve': 'stepBefore' } } }%%
graph LR


For a full list of available curves, including an explanation of custom curves, refer to
the [Shapes](https://github.com/d3/d3-shape/blob/main/README.md#curves) documentation in the
[d3-shape](https://github.com/d3/d3-shape/) project.

### Styling a node

It is possible to apply specific styles such as a thicker border or a different background color to a node.

mermaid-example
flowchart LR
    id1(Start)-->id2(Stop)
    style id1 fill:#f9f,stroke:#333,stroke-width:4px
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5


#### Classes

More convenient than defining the style every time is to define a class of styles and attach this class to the nodes that
should have a different look.

A class definition looks like the example below:


    classDef className fill:#f9f,stroke:#333,stroke-width:4px;


Also, it is possible to define style to multiple classes in one statement:


    classDef firstClassName,secondClassName font-size:12pt;


Attachment of a class to a node is done as per below:


    class nodeId1 className;


It is also possible to attach a class to a list of nodes in one statement:


    class nodeId1,nodeId2 className;


A shorter form of adding a class is to attach the classname to the node using the :::operator as per below:

mermaid-example
flowchart LR
    A:::someclass --> B
    classDef someclass fill:#f96


This form can be used when declaring multiple links between nodes:

mermaid-example
flowchart LR
    A:::foo & B:::bar --> C:::foobar
    classDef foo stroke:#f00
    classDef bar stroke:#0f0
    classDef foobar stroke:#00f


### CSS classes

It is also possible to predefine classes in CSS styles that can be applied from the graph definition as in the example
below:

**Example style**

html
<style>
  .cssClass > rect {
    fill: #ff0000;
    stroke: #ffff00;
    stroke-width: 4px;
  }
</style>


**Example definition**

mermaid-example
flowchart LR
    A-->B[AAA<span>BBB</span>]
    B-->D
    class A cssClass


### Default class

If a class is named default it will be assigned to all classes without specific class definitions.


    classDef default fill:#f9f,stroke:#333,stroke-width:4px;


## Basic support for fontawesome

It is possible to add icons from fontawesome.

The icons are accessed via the syntax fa:#icon class name#.

mermaid-example
flowchart TD
    B["fa:fa-twitter for peace"]
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner)
    B-->E(A fa:fa-camera-retro perhaps?)


Mermaid supports Font Awesome if the CSS is included on the website.
Mermaid does not have any restriction on the version of Font Awesome that can be used.

Please refer the [Official Font Awesome Documentation](https://fontawesome.com/start) on how to include it in your website.

Adding this snippet in the <head> would add support for Font Awesome v6.5.1

html
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  rel="stylesheet"
/>


### Custom icons

It is possible to use custom icons served from Font Awesome as long as the website imports the corresponding kit.

Note that this is currently a paid feature from Font Awesome.

For custom icons, you need to use the fak prefix.

**Example**


flowchart TD
    B[fa:fa-twitter] %% standard icon
    B-->E(fak:fa-custom-icon-name) %% custom icon


And trying to render it

mermaid-example
flowchart TD
    B["fa:fa-twitter for peace"]
    B-->C["fab:fa-truck-bold a custom icon"]


## Graph declarations with spaces between vertices and link and without semicolon

- In graph declarations, the statements also can now end without a semicolon. After release 0.2.16, ending a graph statement with semicolon is just optional. So the below graph declaration is also valid along with the old declarations of the graph.

- A single space is allowed between vertices and the link. However there should not be any space between a vertex and its text and a link and its text. The old syntax of graph declaration will also work and hence this new feature is optional and is introduced to improve readability.

Below is the new declaration of the graph edges which is also valid along with the old declaration of the graph edges.

mermaid-example
flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]


## Configuration

### Renderer

The layout of the diagram is done with the renderer. The default renderer is dagre.

Starting with Mermaid version 9.4, you can use an alternate renderer named elk. The elk renderer is better for larger and/or more complex diagrams.

The _elk_ renderer is an experimental feature.
You can change the renderer to elk by adding this directive:


%%{init: {"flowchart": {"defaultRenderer": "elk"}} }%%


note
Note that the site needs to use mermaid version 9.4+ for this to work and have this featured enabled in the lazy-loading configuration.


### Width

It is possible to adjust the width of the rendered flowchart.

This is done by defining **mermaid.flowchartConfig** or by the CLI to use a JSON file with the configuration. How to use the CLI is described in the mermaidCLI page.
mermaid.flowchartConfig can be set to a JSON string with config parameters or the corresponding object.

javascript
mermaid.flowchartConfig = {
    width: 100%
}


<!--- cspell:ignore lagom --->

# Gantt diagrams

> A Gantt chart is a type of bar chart, first developed by Karol Adamiecki in 1896, and independently by Henry Gantt in the 1910s, that illustrates a project schedule and the amount of time it would take for any one project to finish. Gantt charts illustrate number of days between the start and finish dates of the terminal elements and summary elements of a project.

## A note to users

Gantt Charts will record each scheduled task as one continuous bar that extends from the left to the right. The x axis represents time and the y records the different tasks and the order in which they are to be completed.

It is important to remember that when a date, day, or collection of dates specific to a task are "excluded", the Gantt Chart will accommodate those changes by extending an equal number of days, towards the right, not by creating a gap inside the task.
As shown here ![](./img/Gantt-excluded-days-within.png)

However, if the excluded dates are between two tasks that are set to start consecutively, the excluded dates will be skipped graphically and left blank, and the following task will begin after the end of the excluded dates.
As shown here ![](./img/Gantt-long-weekend-look.png)

A Gantt chart is useful for tracking the amount of time it would take before a project is finished, but it can also be used to graphically represent "non-working days", with a few tweaks.

Mermaid can render Gantt diagrams as SVG, PNG or a MarkDown link that can be pasted into docs.

mermaid-example
gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d


## Syntax

mermaid-example
gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (excludes accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :until isadded
    Functionality added                 :milestone, isadded, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h


Tasks are by default sequential. A task start date defaults to the end date of the preceding task.

A colon, :, separates the task title from its metadata.
Metadata items are separated by a comma, ,. Valid tags are active, done, crit, and milestone. Tags are optional, but if used, they must be specified first.
After processing the tags, the remaining metadata items are interpreted as follows:

1. If a single item is specified, it determines when the task ends. It can either be a specific date/time or a duration. If a duration is specified, it is added to the start date of the task to determine the end date of the task, taking into account any exclusions.
2. If two items are specified, the last item is interpreted as in the previous case. The first item can either specify an explicit start date/time (in the format specified by dateFormat) or reference another task using after <otherTaskID> [[otherTaskID2 [otherTaskID3]]...]. In the latter case, the start date of the task will be set according to the latest end date of any referenced task.
3. If three items are specified, the last two will be interpreted as in the previous case. The first item will denote the ID of the task, which can be referenced using the later <taskID> syntax.

| Metadata syntax                                      | Start date                                          | End date                                              | ID       |
| ---------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | -------- |
| <taskID>, <startDate>, <endDate>                   | startdate as interpreted using dateformat       | endDate as interpreted using dateformat           | taskID |
| <taskID>, <startDate>, <length>                    | startdate as interpreted using dateformat       | Start date + length                                 | taskID |
| <taskID>, after <otherTaskId>, <endDate>           | End date of previously specified task otherTaskID | endDate as interpreted using dateformat           | taskID |
| <taskID>, after <otherTaskId>, <length>            | End date of previously specified task otherTaskID | Start date + length                                 | taskID |
| <taskID>, <startDate>, until <otherTaskId>         | startdate as interpreted using dateformat       | Start date of previously specified task otherTaskID | taskID |
| <taskID>, after <otherTaskId>, until <otherTaskId> | End date of previously specified task otherTaskID | Start date of previously specified task otherTaskID | taskID |
| <startDate>, <endDate>                             | startdate as interpreted using dateformat       | enddate as interpreted using dateformat           | n/a      |
| <startDate>, <length>                              | startdate as interpreted using dateformat       | Start date + length                                 | n/a      |
| after <otherTaskID>, <endDate>                     | End date of previously specified task otherTaskID | enddate as interpreted using dateformat           | n/a      |
| after <otherTaskID>, <length>                      | End date of previously specified task otherTaskID | Start date + length                                 | n/a      |
| <startDate>, until <otherTaskId>                   | startdate as interpreted using dateformat       | Start date of previously specified task otherTaskID | n/a      |
| after <otherTaskId>, until <otherTaskId>           | End date of previously specified task otherTaskID | Start date of previously specified task otherTaskID | n/a      |
| <endDate>                                          | End date of preceding task                          | enddate as interpreted using dateformat           | n/a      |
| <length>                                           | End date of preceding task                          | Start date + length                                 | n/a      |
| until <otherTaskId>                                | End date of preceding task                          | Start date of previously specified task otherTaskID | n/a      |

note
Support for keyword until was added in (v10.9.0+). This can be used to define a task which is running until some other specific task or milestone starts.


For simplicity, the table does not show the use of multiple tasks listed with the after keyword. Here is an example of how to use it and how it's interpreted:

mermaid-example
gantt
    apple :a, 2017-07-20, 1w
    banana :crit, b, 2017-07-23, 1d
    cherry :active, c, after b a, 1d
    kiwi   :d, 2017-07-20, until b c


### Title

The title is an _optional_ string to be displayed at the top of the Gantt chart to describe the chart as a whole.

### Excludes

The excludes is an _optional_ attribute that accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".
These date will be marked on the graph, and be excluded from the duration calculation of tasks. Meaning that if there are excluded dates during a task interval, the number of 'skipped' days will be added to the end of the task to ensure the duration is as specified in the code.

#### Weekend (v\<MERMAID_RELEASE_VERSION>+)

When excluding weekends, it is possible to configure the weekends to be either Friday and Saturday or Saturday and Sunday. By default weekends are Saturday and Sunday.
To define the weekend start day, there is an _optional_ attribute weekend that can be added in a new line followed by either friday or saturday.

mermaid-example
gantt
    title A Gantt Diagram Excluding Fri - Sat weekends
    dateFormat YYYY-MM-DD
    excludes weekends
    weekend friday
    section Section
        A task          :a1, 2024-01-01, 30d
        Another task    :after a1, 20d


### Section statements

You can divide the chart into various sections, for example to separate different parts of a project like development and documentation.

To do so, start a line with the section keyword and give it a name. (Note that unlike with the [title for the entire chart](#title), this name is _required_.

### Milestones

You can add milestones to the diagrams. Milestones differ from tasks as they represent a single instant in time and are identified by the keyword milestone. Below is an example on how to use milestones. As you may notice, the exact location of the milestone is determined by the initial date for the milestone and the "duration" of the task this way: _initial date_+_duration_/2.

mermaid-example
gantt
    dateFormat HH:mm
    axisFormat %H:%M
    Initial milestone : milestone, m1, 17:49, 2m
    Task A : 10m
    Task B : 5m
    Final milestone : milestone, m2, 18:08, 4m


## Setting dates

dateFormat defines the format of the date **input** of your gantt elements. How these dates are represented in the rendered chart **output** are defined by axisFormat.

### Input date format

The default input date format is YYYY-MM-DD. You can define your custom dateFormat.

markdown
dateFormat YYYY-MM-DD


The following formatting options are supported:

| Input      | Example        | Description                                            |
| ---------- | -------------- | ------------------------------------------------------ |
| YYYY     | 2014           | 4 digit year                                           |
| YY       | 14             | 2 digit year                                           |
| Q        | 1..4           | Quarter of year. Sets month to first month in quarter. |
| M MM     | 1..12          | Month number                                           |
| MMM MMMM | January..Dec   | Month name in locale set by dayjs.locale()           |
| D DD     | 1..31          | Day of month                                           |
| Do       | 1st..31st      | Day of month with ordinal                              |
| DDD DDDD | 1..365         | Day of year                                            |
| X        | 1410715640.579 | Unix timestamp                                         |
| x        | 1410715640579  | Unix ms timestamp                                      |
| H HH     | 0..23          | 24 hour time                                           |
| h hh     | 1..12          | 12 hour time used with a A.                          |
| a A      | am pm          | Post or ante meridiem                                  |
| m mm     | 0..59          | Minutes                                                |
| s ss     | 0..59          | Seconds                                                |
| S        | 0..9           | Tenths of a second                                     |
| SS       | 0..99          | Hundreds of a second                                   |
| SSS      | 0..999         | Thousandths of a second                                |
| Z ZZ     | +12:00         | Offset from UTC as +-HH:mm, +-HHmm, or Z               |

More info in: https://day.js.org/docs/en/parse/string-format/

### Output date format on the axis

The default output date format is YYYY-MM-DD. You can define your custom axisFormat, like 2020-Q1 for the first quarter of the year 2020.

markdown
axisFormat %Y-%m-%d


The following formatting strings are supported:

| Format | Definition                                                                                |
| ------ | ----------------------------------------------------------------------------------------- |
| %a     | abbreviated weekday name                                                                  |
| %A     | full weekday name                                                                         |
| %b     | abbreviated month name                                                                    |
| %B     | full month name                                                                           |
| %c     | date and time, as "%a %b %e %H:%M:%S %Y"                                                  |
| %d     | zero-padded day of the month as a decimal number [01,31]                                  |
| %e     | space-padded day of the month as a decimal number [ 1,31]; equivalent to %\_d             |
| %H     | hour (24-hour clock) as a decimal number [00,23]                                          |
| %I     | hour (12-hour clock) as a decimal number [01,12]                                          |
| %j     | day of the year as a decimal number [001,366]                                             |
| %m     | month as a decimal number [01,12]                                                         |
| %M     | minute as a decimal number [00,59]                                                        |
| %L     | milliseconds as a decimal number [000, 999]                                               |
| %p     | either AM or PM                                                                           |
| %S     | second as a decimal number [00,61]                                                        |
| %U     | week number of the year (Sunday as the first day of the week) as a decimal number [00,53] |
| %w     | weekday as a decimal number [0(Sunday),6]                                                 |
| %W     | week number of the year (Monday as the first day of the week) as a decimal number [00,53] |
| %x     | date, as "%m/%d/%Y"                                                                       |
| %X     | time, as "%H:%M:%S"                                                                       |
| %y     | year without century as a decimal number [00,99]                                          |
| %Y     | year with century as a decimal number                                                     |
| %Z     | time zone offset, such as "-0700"                                                         |
| %%     | a literal "%" character                                                                   |

More info in: [https://github.com/d3/d3-time-format/tree/v4.0.0#locale_format](https://github.com/d3/d3-time-format/tree/v4.0.0#locale_format)

### Axis ticks (v10.3.0+)

The default output ticks are auto. You can custom your tickInterval, like 1day or 1week.

markdown
tickInterval 1day


The pattern is:

javascript
/^([1-9][0-9]*)(millisecond|second|minute|hour|day|week|month)$/;


More info in: [https://github.com/d3/d3-time#interval_every](https://github.com/d3/d3-time#interval_every)

Week-based tickIntervals start the week on sunday by default. If you wish to specify another weekday on which the tickInterval should start, use the weekday option:

mermaid-example
gantt
  tickInterval 1week
  weekday monday


warning
millisecond and second support was added in v10.3.0


## Output in compact mode

The compact mode allows you to display multiple tasks in the same row. Compact mode can be enabled for a gantt chart by setting the display mode of the graph via preceding YAML settings.

mermaid
---
displayMode: compact
---
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD

    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :a2, 2014-01-20, 25d
    Another one      :a3, 2014-02-10, 20d


## Comments

Comments can be entered within a gantt chart, which will be ignored by the parser. Comments need to be on their own line and must be prefaced with %% (double percent signs). Any text after the start of the comment to the next newline will be treated as a comment, including any diagram syntax.

mermaid
gantt
    title A Gantt Diagram
    %% This is a comment
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d


## Styling

Styling of the Gantt diagram is done by defining a number of CSS classes. During rendering, these classes are extracted from the file located at src/diagrams/gantt/styles.js

### Classes used

| Class                 | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| grid.tick             | Styling for the Grid Lines                                             |
| grid.path             | Styling for the Grid's borders                                         |
| .taskText             | Task Text Styling                                                      |
| .taskTextOutsideRight | Styling for Task Text that exceeds the activity bar towards the right. |
| .taskTextOutsideLeft  | Styling for Task Text that exceeds the activity bar, towards the left. |
| todayMarker           | Toggle and Styling for the "Today Marker"                              |

### Sample stylesheet

css
.grid .tick {
  stroke: lightgrey;
  opacity: 0.3;
  shape-rendering: crispEdges;
}
.grid path {
  stroke-width: 0;
}

#tag {
  color: white;
  background: #fa283d;
  width: 150px;
  position: absolute;
  display: none;
  padding: 3px 6px;
  margin-left: -80px;
  font-size: 11px;
}

#tag:before {
  border: solid transparent;
  content: ' ';
  height: 0;
  left: 50%;
  margin-left: -5px;
  position: absolute;
  width: 0;
  border-width: 10px;
  border-bottom-color: #fa283d;
  top: -20px;
}
.taskText {
  fill: white;
  text-anchor: middle;
}
.taskTextOutsideRight {
  fill: black;
  text-anchor: start;
}
.taskTextOutsideLeft {
  fill: black;
  text-anchor: end;
}


## Today marker

You can style or hide the marker for the current date. To style it, add a value for the todayMarker key.


todayMarker stroke-width:5px,stroke:#0f0,opacity:0.5


To hide the marker, set todayMarker to off.


todayMarker off


## Configuration

It is possible to adjust the margins for rendering the gantt diagram.

This is done by defining the ganttConfig part of the configuration object.
How to use the CLI is described in the [mermaidCLI](../config/mermaidCLI.md) page.

mermaid.ganttConfig can be set to a JSON string with config parameters or the corresponding object.

javascript
mermaid.ganttConfig = {
  titleTopMargin: 25, // Margin top for the text over the diagram
  barHeight: 20, // The height of the bars in the graph
  barGap: 4, // The margin between the different activities in the gantt diagram
  topPadding: 75, // Margin between title and gantt diagram and between axis and gantt diagram.
  rightPadding: 75, // The space allocated for the section name to the right of the activities
  leftPadding: 75, // The space allocated for the section name to the left of the activities
  gridLineStartPadding: 10, // Vertical starting position of the grid lines
  fontSize: 12, // Font size
  sectionFontSize: 24, // Font size for sections
  numberSectionStyles: 1, // The number of alternating section styles
  axisFormat: '%d/%m', // Date/time format of the axis
  tickInterval: '1 week', // Axis ticks
  topAxis: true, // When this flag is set, date labels will be added to the top of the chart
  displayMode: 'compact', // Turns compact mode on
  weekday: 'sunday', // On which day a week-based interval should start
};


### Possible configuration params:

| Param           | Description                                                                                                                                | Default value |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| mirrorActor     | Turns on/off the rendering of actors below the diagram as well as above it                                                                 | false         |
| bottomMarginAdj | Adjusts how far down the graph ended. Wide borders styles with css could generate unwanted clipping which is why this config param exists. | 1             |

## Interaction

It is possible to bind a click event to a task. The click can lead to either a javascript callback or to a link which will be opened in the current browser tab. **Note**: This functionality is disabled when using securityLevel='strict' and enabled when using securityLevel='loose'.


click taskId call callback(arguments)
click taskId href URL


- taskId is the id of the task
- callback is the name of a javascript function defined on the page displaying the graph, the function will be called with the taskId as the parameter if no other arguments are specified.

Beginner's tip—a full example using interactive links in an html context:

html
<body>
  <pre class="mermaid">
    gantt
      dateFormat  YYYY-MM-DD

      section Clickable
      Visit mermaidjs         :active, cl1, 2014-01-07, 3d
      Print arguments         :cl2, after cl1, 3d
      Print task              :cl3, after cl2, 3d

      click cl1 href "https://mermaidjs.github.io/"
      click cl2 call printArguments("test1", "test2", test3)
      click cl3 call printTask()
  </pre>

  <script>
    const printArguments = function (arg1, arg2, arg3) {
      alert('printArguments called with arguments: ' + arg1 + ', ' + arg2 + ', ' + arg3);
    };
    const printTask = function (taskId) {
      alert('taskId: ' + taskId);
    };
    const config = {
      startOnLoad: true,
      securityLevel: 'loose',
    };
    mermaid.initialize(config);
  </script>
</body>


## Examples

### Bar chart (using gantt chart)

mermaid-example
gantt
    title Git Issues - days since last update
    dateFormat X
    axisFormat %s
    section Issue19062
    71   : 0, 71
    section Issue19401
    36   : 0, 36
    section Issue193
    34   : 0, 34
    section Issue7441
    9    : 0, 9
    section Issue1300
    5    : 0, 5


<!--- cspell:ignore isadded --->

# Gitgraph Diagrams

> A Git Graph is a pictorial representation of git commits and git actions(commands) on various branches.

These kind of diagram are particularly helpful to developers and devops teams to share their Git branching strategies. For example, it makes it easier to visualize how git flow works.

Mermaid can render Git diagrams

mermaid-example
---
title: Example Git diagram
---
gitGraph
   commit
   commit
   branch develop
   checkout develop
   commit
   commit
   checkout main
   merge develop
   commit
   commit


In Mermaid, we support the basic git operations like:

- _commit_ : Representing a new commit on the current branch.
- _branch_ : To create & switch to a new branch, setting it as the current branch.
- _checkout_ : To checking out an existing branch and setting it as the current branch.
- _merge_ : To merge an existing branch onto the current branch.

With the help of these key git commands, you will be able to draw a gitgraph in Mermaid very easily and quickly.
Entity names are often capitalized, although there is no accepted standard on this, and it is not required in Mermaid.

## Syntax

Mermaid syntax for a gitgraph is very straight-forward and simple. It follows a declarative-approach, where each commit is drawn on the timeline in the diagram, in order of its occurrences/presence in code. Basically, it follows the insertion order for each command.

First thing you do is to declare your diagram type using the **gitgraph** keyword. This gitgraph keyword, tells Mermaid that you wish to draw a gitgraph, and parse the diagram code accordingly.

Each gitgraph, is initialized with **_main_** branch. So unless you create a different branch, by-default the commits will go to the main branch. This is driven with how git works, where in the beginning you always start with the main branch (formerly called as **_master_** branch). And by-default, main branch is set as your **_current branch_**.

You make use of **_commit_** keyword to register a commit on the current branch. Let see how this works:

A simple gitgraph showing three commits on the default (**_main_**) branch:

mermaid-example
    gitGraph
       commit
       commit
       commit


If you look closely at the previous example, you can see the default branch main along with three commits. Also, notice that by default each commit has been given a unique & random ID. What if you wanted to give your own custom ID to a commit? Yes, it is possible to do that with Mermaid.

### Adding custom commit id

For a given commit you may specify a custom ID at the time of declaring it using the id attribute, followed by : and your custom value within a "" quote. For example: commit id: "your_custom_id"

Let us see how this works with the help of the following diagram:

mermaid-example
    gitGraph
       commit id: "Alpha"
       commit id: "Beta"
       commit id: "Gamma"


In this example, we have given our custom IDs to the commits.

### Modifying commit type

In Mermaid, a commit can be of three type, which render a bit different in the diagram. These types are:

- NORMAL : Default commit type. Represented by a solid circle in the diagram
- REVERSE : To emphasize a commit as a reverse commit. Represented by a crossed solid circle in the diagram.
- HIGHLIGHT : To highlight a particular commit in the diagram. Represented by a filled rectangle in the diagram.

For a given commit you may specify its type at the time of declaring it using the type attribute, followed by : and the required type option discussed above. For example: commit type: HIGHLIGHT

NOTE: If no commit type is specified, NORMAL is picked as default.

Let us see how these different commit type look with the help of the following diagram:

mermaid-example
    gitGraph
       commit id: "Normal"
       commit
       commit id: "Reverse" type: REVERSE
       commit
       commit id: "Highlight" type: HIGHLIGHT
       commit


In this example, we have specified different types to each commit. Also, see how we have included both id and type together at the time of declaring our commits.

### Adding Tags

For a given commit you may decorate it as a **tag**, similar to the concept of tags or release version in git world.
You can attach a custom tag at the time of declaring a commit using the tag attribute, followed by : and your custom value within "" quote. For example: commit tag: "your_custom_tag"

Let us see how this works with the help of the following diagram:

mermaid-example
    gitGraph
       commit
       commit id: "Normal" tag: "v1.0.0"
       commit
       commit id: "Reverse" type: REVERSE tag: "RC_1"
       commit
       commit id: "Highlight" type: HIGHLIGHT tag: "8.8.4"
       commit


In this example, we have given custom tags to the commits. Also, see how we have combined all these attributes in a single commit declaration. You can mix-match these attributes as you like.

### Create a new branch

In Mermaid, in-order to create a new branch, you make use of the branch keyword. You also need to provide a name of the new branch. The name has to be unique and cannot be that of an existing branch. A branch name that could be confused for a keyword must be quoted within "". Usage examples: branch develop, branch "cherry-pick"

When Mermaid, reads the branch keyword, it creates a new branch and sets it as the current branch. Equivalent to you creating a new branch and checking it out in Git world.

Let see this in an example:

mermaid-example
    gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit


In this example, see how we started with default main branch, and pushed two commits on that.
Then we created the develop branch, and all commits afterwards are put on the develop branch as it became the current branch.

### Checking out an existing branch

In Mermaid, in order to switch to an existing branch, you make use of the checkout keyword. You also need to provide a name of an existing branch. If no branch is found with the given name, it will result in console error. Usage example: checkout develop

When Mermaid, reads the checkout keyword, it finds the given branch and sets it as the current branch. Equivalent to checking out a branch in the Git world.

Let see modify our previous example:

mermaid-example
    gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit
       checkout main
       commit
       commit


In this example, see how we started with default main branch, and pushed two commits on that.
Then we created the develop branch, and all three commits afterwards are put on the develop branch as it became the current branch.
After this we made use of the checkout keyword to set the current branch as main, and all commit that follow are registered against the current branch, i.e. main.

### Merging two branches

In Mermaid, in order to merge or join to an existing branch, you make use of the merge keyword. You also need to provide the name of an existing branch to merge from. If no branch is found with the given name, it will result in console error. Also, you can only merge two separate branches, and cannot merge a branch with itself. In such case an error is throw.

Usage example: merge develop

When Mermaid, reads the merge keyword, it finds the given branch and its head commit (the last commit on that branch), and joins it with the head commit on the **current branch**. Each merge results in a **_merge commit_**, represented in the diagram with **filled double circle**.

Let us modify our previous example to merge our two branches:

mermaid-example
    gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit
       checkout main
       commit
       commit
       merge develop
       commit
       commit


In this example, see how we started with default main branch, and pushed two commits on that.
Then we created the develop branch, and all three commits afterwards are put on the develop branch as it became the current branch.
After this we made use of the checkout keyword to set the current branch as main, and all commits that follow are registered against the current branch, i.e. main.
After this we merge the develop branch onto the current branch main, resulting in a merge commit.
Since the current branch at this point is still main, the last two commits are registered against that.

You can also decorate your merge with similar attributes as you did for the commit using:

- id--> To override the default ID with custom ID
- tag--> To add a custom tag to your merge commit
- type--> To override the default shape of merge commit. Here you can use other commit type mentioned earlier.

And you can choose to use none, some or all of these attributes together.
For example: merge develop id: "my_custom_id" tag: "my_custom_tag" type: REVERSE

Let us see how this works with the help of the following diagram:

mermaid-example
    gitGraph
       commit id: "1"
       commit id: "2"
       branch nice_feature
       checkout nice_feature
       commit id: "3"
       checkout main
       commit id: "4"
       checkout nice_feature
       branch very_nice_feature
       checkout very_nice_feature
       commit id: "5"
       checkout main
       commit id: "6"
       checkout nice_feature
       commit id: "7"
       checkout main
       merge nice_feature id: "customID" tag: "customTag" type: REVERSE
       checkout very_nice_feature
       commit id: "8"
       checkout main
       commit id: "9"


### Cherry Pick commit from another branch

Similar to how 'git' allows you to cherry-pick a commit from **another branch** onto the **current** branch, Mermaid also supports this functionality. You can also cherry-pick a commit from another branch using the cherry-pick keyword.

To use the cherry-pick keyword, you must specify the id using the id attribute, followed by : and your desired commit id within a "" quote. For example:

cherry-pick id: "your_custom_id"

Here, a new commit representing the cherry-pick is created on the current branch, and is visually highlighted in the diagram with a **cherry** and a tag depicting the commit id from which it is cherry-picked from.

A few important rules to note here are:

1. You need to provide the id for an existing commit to be cherry-picked. If given commit id does not exist it will result in an error. For this, make use of the commit id:$value format of declaring commits. See the examples from above.
2. The given commit must not exist on the current branch. The cherry-picked commit must always be a different branch than the current branch.
3. Current branch must have at least one commit, before you can cherry-pick, otherwise it will cause an error is throw.
4. When cherry-picking a merge commit, providing a parent commit ID is mandatory. If the parent attribute is omitted or an invalid parent commit ID is provided, an error will be thrown.
5. The specified parent commit must be an immediate parent of the merge commit being cherry-picked.

Let see an example:

mermaid-example
    gitGraph
        commit id: "ZERO"
        branch develop
        branch release
        commit id:"A"
        checkout main
        commit id:"ONE"
        checkout develop
        commit id:"B"
        checkout main
        merge develop id:"MERGE"
        commit id:"TWO"
        checkout release
        cherry-pick id:"MERGE" parent:"B"
        commit id:"THREE"
        checkout develop
        commit id:"C"


## Gitgraph specific configuration options

In Mermaid, you have the option to configure the gitgraph diagram. You can configure the following options:

- showBranches : Boolean, default is true. If set to false, the branches are not shown in the diagram.
- showCommitLabel : Boolean, default is true. If set to false, the commit labels are not shown in the diagram.
- mainBranchName : String, default is main. The name of the default/root branch.
- mainBranchOrder : Position of the main branch in the list of branches. default is 0, meaning, by default main branch is the first in the order.
- parallelCommits: Boolean, default is false. If set to true, commits x distance away from the parent are shown at the same level in the diagram.

Let's look at them one by one.

## Hiding Branch names and lines

Sometimes you may want to hide the branch names and lines from the diagram. You can do this by using the showBranches keyword. By default its value is true. You can set it to false using directives.

Usage example:

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'showBranches': false}} }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:"ash" tag:"abc"
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release


## Commit labels Layout: Rotated or Horizontal

Mermaid supports two types of commit labels layout. The default layout is **rotated**, which means the labels are placed below the commit circle, rotated at 45 degrees for better readability. This is particularly useful for commits with long labels.

The other option is **horizontal**, which means the labels are placed below the commit circle centred horizontally, and are not rotated. This is particularly useful for commits with short labels.

You can change the layout of the commit labels by using the rotateCommitLabel keyword in the directive. It defaults to true, which means the commit labels are rotated.

Usage example: Rotated commit labels

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'rotateCommitLabel': true}} }%%
gitGraph
  commit id: "feat(api): ..."
  commit id: "a"
  commit id: "b"
  commit id: "fix(client): .extra long label.."
  branch c2
  commit id: "feat(modules): ..."
  commit id: "test(client): ..."
  checkout main
  commit id: "fix(api): ..."
  commit id: "ci: ..."
  branch b1
  commit
  branch b2
  commit


Usage example: Horizontal commit labels

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'rotateCommitLabel': false}} }%%
gitGraph
  commit id: "feat(api): ..."
  commit id: "a"
  commit id: "b"
  commit id: "fix(client): .extra long label.."
  branch c2
  commit id: "feat(modules): ..."
  commit id: "test(client): ..."
  checkout main
  commit id: "fix(api): ..."
  commit id: "ci: ..."
  branch b1
  commit
  branch b2
  commit


## Hiding commit labels

Sometimes you may want to hide the commit labels from the diagram. You can do this by using the showCommitLabel keyword. By default its value is true. You can set it to false using directives.

Usage example:

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'showBranches': false,'showCommitLabel': false}} }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:"ash"
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release


## Customizing main branch name

Sometimes you may want to customize the name of the main/default branch. You can do this by using the mainBranchName keyword. By default its value is main. You can set it to any string using directives.

Usage example:

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'showBranches': true, 'showCommitLabel':true,'mainBranchName': 'MetroLine1'}} }%%
      gitGraph
        commit id:"NewYork"
        commit id:"Dallas"
        branch MetroLine2
        commit id:"LosAngeles"
        commit id:"Chicago"
        commit id:"Houston"
        branch MetroLine3
        commit id:"Phoenix"
        commit type: HIGHLIGHT id:"Denver"
        commit id:"Boston"
        checkout MetroLine1
        commit id:"Atlanta"
        merge MetroLine3
        commit id:"Miami"
        commit id:"Washington"
        merge MetroLine2 tag:"MY JUNCTION"
        commit id:"Boston"
        commit id:"Detroit"
        commit type:REVERSE id:"SanFrancisco"


Look at the imaginary railroad map created using Mermaid. Here, we have changed the default main branch name to MetroLine1.

## Customizing branch ordering

In Mermaid, by default the branches are shown in the order of their definition or appearance in the diagram code.

Sometimes you may want to customize the order of the branches. You can do this by using the order keyword next the branch definition. You can set it to a positive number.

Mermaid follows the given precedence order of the order keyword.

- Main branch is always shown first as it has default order value of 0. (unless its order is modified and changed from 0 using the mainBranchOrder keyword in the config)
- Next, All branches without an order are shown in the order of their appearance in the diagram code.
- Next, All branches with an order are shown in the order of their order value.

To fully control the order of all the branches, you must define order for all the branches.

Usage example:

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'showBranches': true, 'showCommitLabel':true}} }%%
      gitGraph
      commit
      branch test1 order: 3
      branch test2 order: 2
      branch test3 order: 1



Look at the diagram, all the branches are following the order defined.

Usage example:

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'showBranches': true, 'showCommitLabel':true,'mainBranchOrder': 2}} }%%
      gitGraph
      commit
      branch test1 order: 3
      branch test2
      branch test3
      branch test4 order: 1



Look at the diagram, here, all the branches without a specified order are drawn in their order of definition.
Then, test4 branch is drawn because the order of 1.
Then, main branch is drawn because the order of 2.
And, lastly test1is drawn because the order of 3.

NOTE: Because we have overridden the mainBranchOrder to 2, the main branch is not drawn in the beginning, instead follows the ordering.

Here, we have changed the default main branch name to MetroLine1.

## Orientation (v10.3.0+)

Mermaid supports three graph orientations: **Left-to-Right** (default), **Top-to-Bottom**, and **Bottom-to-Top**.

You can set this with either LR: (for [**Left-to-Right**](#left-to-right-default-lr)), TB: (for [**Top-to-Bottom**](#top-to-bottom-tb)) or BT: (for [**Bottom-to-Top**](#bottom-to-top-bt)) after gitGraph.

### Left to Right (default, LR:)

In Mermaid, the default orientation is for commits to run from left to right and for branches to be stacked on top of one another.

However, you can set this explicitly with LR: after gitGraph.

Usage example:

mermaid-example
    gitGraph LR:
       commit
       commit
       branch develop
       commit
       commit
       checkout main
       commit
       commit
       merge develop
       commit
       commit


### Top to Bottom (TB:)

In TB (**Top-to-Bottom**) orientation, the commits run from top to bottom of the graph and branches are arranged side-by-side.

To orient the graph this way, you need to add TB: after gitGraph.

Usage example:

mermaid-example
    gitGraph TB:
       commit
       commit
       branch develop
       commit
       commit
       checkout main
       commit
       commit
       merge develop
       commit
       commit


### Bottom to Top (BT:) (v<MERMAID_RELEASE_VERSION>+)

In BT (**Bottom-to-Top**) orientation, the commits run from bottom to top of the graph and branches are arranged side-by-side.

To orient the graph this way, you need to add BT: after gitGraph.

Usage example:

mermaid-example
    gitGraph BT:
       commit
       commit
       branch develop
       commit
       commit
       checkout main
       commit
       commit
       merge develop
       commit
       commit


## Parallel commits (v10.8.0+)

Commits in Mermaid display temporal information in gitgraph by default. For example if two commits are one commit away from its parent, the commit that was made earlier is rendered closer to its parent. You can turn this off by enabling the parallelCommits flag.

### Temporal Commits (default, parallelCommits: false)

mermaid-example
---
config:
  gitGraph:
    parallelCommits: false
---
gitGraph:
  commit
  branch develop
  commit
  commit
  checkout main
  commit
  commit


### Parallel commits (parallelCommits: true)

mermaid-example
---
config:
  gitGraph:
    parallelCommits: true
---
gitGraph:
  commit
  branch develop
  commit
  commit
  checkout main
  commit
  commit


## Themes

Mermaid supports a bunch of pre-defined themes which you can use to find the right one for you. PS: you can actually override an existing theme's variable to get your own custom theme going. Learn more about theming your diagram [here](../config/theming.md).

The following are the different pre-defined theme options:

- base
- forest
- dark
- default
- neutral

**NOTE**: To change theme you can either use the initialize call or _directives_. Learn more about [directives](../config/directives.md)
Let's put them to use, and see how our sample diagram looks in different themes:

### Base Theme

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'base' } }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:"ash" tag:"abc"
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release


### Forest Theme

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:"ash" tag:"abc"
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release


### Default Theme

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'default' } }%%
      gitGraph
        commit type:HIGHLIGHT
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:"ash" tag:"abc"
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release


### Dark Theme

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'dark' } }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:"ash" tag:"abc"
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release


### Neutral Theme

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'neutral' } }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:"ash" tag:"abc"
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release


## Customize using Theme Variables

Mermaid allows you to customize your diagram using theme variables which govern the look and feel of various elements of the diagram.

For understanding let us take a sample diagram with theme default, the default values of the theme variables is picked automatically from the theme. Later on we will see how to override the default values of the theme variables.

See how the default theme is used to set the colors for the branches:

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'default' } }%%
       gitGraph
       commit
       branch develop
       commit tag:"v1.0.0"
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit


> #### IMPORTANT:
>
> Mermaid supports the theme variables to override the default values for **up to 8 branches**, i.e., you can set the color/styling of up to 8 branches using theme variables. After this threshold of 8 branches, the theme variables are reused in the cyclic manner, i.e. the 9th branch will use the color/styling of the 1st branch, or the branch at index position '8' will use the color/styling of the branch at index position '0'.
> _More on this in the next section. See examples on **Customizing branch label colors** below_

### Customizing branch colors

You can customize the branch colors using the git0 to git7 theme variables. Mermaid allows you to set the colors for up-to 8 branches, where git0 variable will drive the value of the first branch, git1 will drive the value of the second branch and so on.

NOTE: Default values for these theme variables are picked from the selected theme. If you want to override the default values, you can use the initialize call to add your custom theme variable values.

Example:

Now let's override the default values for the git0 to git3 variables:

mermaid-example
    %%{init: { 'logLevel': 'debug', 'theme': 'default' , 'themeVariables': {
              'git0': '#ff0000',
              'git1': '#00ff00',
              'git2': '#0000ff',
              'git3': '#ff00ff',
              'git4': '#00ffff',
              'git5': '#ffff00',
              'git6': '#ff00ff',
              'git7': '#00ffff'
       } } }%%
       gitGraph
       commit
       branch develop
       commit tag:"v1.0.0"
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit



See how the branch colors are changed to the values specified in the theme variables.

### Customizing branch label colors

You can customize the branch label colors using the gitBranchLabel0 to gitBranchLabel7 theme variables. Mermaid allows you to set the colors for up-to 8 branches, where gitBranchLabel0 variable will drive the value of the first branch label, gitBranchLabel1 will drive the value of the second branch label and so on.

Lets see how the default theme is used to set the colors for the branch labels:

Now let's override the default values for the gitBranchLabel0 to gitBranchLabel2 variables:

mermaid-example
    %%{init: { 'logLevel': 'debug', 'theme': 'default' , 'themeVariables': {
        'gitBranchLabel0': '#ffffff',
        'gitBranchLabel1': '#ffffff',
        'gitBranchLabel2': '#ffffff',
        'gitBranchLabel3': '#ffffff',
        'gitBranchLabel4': '#ffffff',
        'gitBranchLabel5': '#ffffff',
        'gitBranchLabel6': '#ffffff',
        'gitBranchLabel7': '#ffffff',
        'gitBranchLabel8': '#ffffff',
        'gitBranchLabel9': '#ffffff'
  } } }%%
  gitGraph
    checkout main
    branch branch1
    branch branch2
    branch branch3
    branch branch4
    branch branch5
    branch branch6
    branch branch7
    branch branch8
    branch branch9
    checkout branch1
    commit


Here, you can see that branch8 and branch9 colors and the styles are being picked from branch at index position 0 (main) and 1(branch1) respectively, i.e., **branch themeVariables are repeated cyclically**.

### Customizing Commit colors

You can customize commit using the commitLabelColor and commitLabelBackground theme variables for changes in the commit label color and background color respectively.

Example:
Now let's override the default values for the commitLabelColor to commitLabelBackground variables:

mermaid-example
    %%{init: { 'logLevel': 'debug', 'theme': 'default' , 'themeVariables': {
              'commitLabelColor': '#ff0000',
              'commitLabelBackground': '#00ff00'
       } } }%%
       gitGraph
       commit
       branch develop
       commit tag:"v1.0.0"
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit



See how the commit label color and background color are changed to the values specified in the theme variables.

### Customizing Commit Label Font Size

You can customize commit using the commitLabelFontSize theme variables for changing in the font size of the commit label .

Example:
Now let's override the default values for the commitLabelFontSize variable:

mermaid-example
    %%{init: { 'logLevel': 'debug', 'theme': 'default' , 'themeVariables': {
              'commitLabelColor': '#ff0000',
              'commitLabelBackground': '#00ff00',
              'commitLabelFontSize': '16px'
       } } }%%
       gitGraph
       commit
       branch develop
       commit tag:"v1.0.0"
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit



See how the commit label font size changed.

### Customizing Tag Label Font Size

You can customize commit using the tagLabelFontSize theme variables for changing in the font size of the tag label .

Example:
Now let's override the default values for the tagLabelFontSize variable:

mermaid-example
    %%{init: { 'logLevel': 'debug', 'theme': 'default' , 'themeVariables': {
              'commitLabelColor': '#ff0000',
              'commitLabelBackground': '#00ff00',
              'tagLabelFontSize': '16px'
       } } }%%
       gitGraph
       commit
       branch develop
       commit tag:"v1.0.0"
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit



See how the tag label font size changed.

### Customizing Tag colors

You can customize tag using the tagLabelColor,tagLabelBackground and tagLabelBorder theme variables for changes in the tag label color,tag label background color and tag label border respectively.
Example:
Now let's override the default values for the tagLabelColor, tagLabelBackground and to tagLabelBorder variables:

mermaid-example
    %%{init: { 'logLevel': 'debug', 'theme': 'default' , 'themeVariables': {
              'tagLabelColor': '#ff0000',
              'tagLabelBackground': '#00ff00',
              'tagLabelBorder': '#0000ff'
       } } }%%
       gitGraph
       commit
       branch develop
       commit tag:"v1.0.0"
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit



See how the tag colors are changed to the values specified in the theme variables.

### Customizing Highlight commit colors

You can customize the highlight commit colors in relation to the branch it is on using the gitInv0 to gitInv7 theme variables. Mermaid allows you to set the colors for up-to 8 branches specific highlight commit, where gitInv0 variable will drive the value of the first branch's highlight commits, gitInv1 will drive the value of the second branch's highlight commit label and so on.

Example:

Now let's override the default values for the git0 to git3 variables:

mermaid-example
    %%{init: { 'logLevel': 'debug', 'theme': 'default' , 'themeVariables': {
              'gitInv0': '#ff0000'
       } } }%%
       gitGraph
       commit
       branch develop
       commit tag:"v1.0.0"
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit



See how the highlighted commit color on the first branch is changed to the value specified in the theme variable gitInv0.

# Mindmap

> Mindmap: This is an experimental diagram for now. The syntax and properties can change in future releases. The syntax is stable except for the icon integration which is the experimental part.

"A mind map is a diagram used to visually organize information into a hierarchy, showing relationships among pieces of the whole. It is often created around a single concept, drawn as an image in the center of a blank page, to which associated representations of ideas such as images, words and parts of words are added. Major ideas are connected directly to the central concept, and other ideas branch out from those major ideas." Wikipedia

### An example of a mindmap.

mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid



## Syntax

The syntax for creating Mindmaps is simple and relies on indentation for setting the levels in the hierarchy.

In the following example you can see how there are 3 different levels. One with starting at the left of the text and another level with two rows starting at the same column, defining the node A. At the end there is one more level where the text is indented further than the previous lines defining the nodes B and C.


mindmap
    Root
        A
            B
            C


In summary is a simple text outline where there is one node at the root level called Root which has one child A. A in turn has two children Band C. In the diagram below we can see this rendered as a mindmap.

mermaid
mindmap
Root
    A
      B
      C


In this way we can use a text outline to generate a hierarchical mindmap.

## Different shapes

Mermaid mindmaps can show nodes using different shapes. When specifying a shape for a node the syntax is similar to flowchart nodes, with an id followed by the shape definition and with the text within the shape delimiters. Where possible we try/will try to keep the same shapes as for flowcharts, even though they are not all supported from the start.

Mindmap can show the following shapes:

### Square

mermaid-example
mindmap
    id[I am a square]


### Rounded square

mermaid-example
mindmap
    id(I am a rounded square)


### Circle

mermaid-example
mindmap
    id((I am a circle))


### Bang

mermaid-example
mindmap
    id))I am a bang((


### Cloud

mermaid-example
mindmap
    id)I am a cloud(


### Hexagon

mermaid-example
mindmap
    id{{I am a hexagon}}


### Default

mermaid-example
mindmap
    I am the default shape


More shapes will be added, beginning with the shapes available in flowcharts.

# Icons and classes

## Icons

As with flowcharts you can add icons to your nodes but with an updated syntax. The styling for the font based icons are added during the integration so that they are available for the web page. _This is not something a diagram author can do but has to be done with the site administrator or the integrator_. Once the icon fonts are in place you add them to the mind map nodes using the ::icon() syntax. You place the classes for the icon within the parenthesis like in the following example where icons for material design and [Font Awesome 5](https://fontawesome.com/v5/search?o=r&m=free) are displayed. The intention is that this approach should be used for all diagrams supporting icons. **Experimental feature:** This wider scope is also the reason Mindmaps are experimental as this syntax and approach could change.

mermaid-example
mindmap
    Root
        A
        ::icon(fa fa-book)
        B(B)
        ::icon(mdi mdi-skull-outline)


## Classes

Again the syntax for adding classes is similar to flowcharts. You can add classes using a triple colon following a number of css classes separated by space. In the following example one of the nodes has two custom classes attached urgent turning the background red and the text white and large increasing the font size:

mermaid-example
mindmap
    Root
        A[A]
        :::urgent large
        B(B)
        C


_These classes need to be supplied by the site administrator._

## Unclear indentation

The actual indentation does not really matter only compared with the previous rows. If we take the previous example and disrupt it a little we can see how the calculations are performed. Let us start with placing C with a smaller indentation than B but larger then A.


mindmap
    Root
        A
            B
          C


This outline is unclear as B clearly is a child of A but when we move on to C the clarity is lost. C is not a child of B with a higher indentation nor does it have the same indentation as B. The only thing that is clear is that the first node with smaller indentation, indicating a parent, is A. Then Mermaid relies on this known truth and compensates for the unclear indentation and selects A as a parent of C leading till the same diagram with B and C as siblings.

mermaid
mindmap
Root
    A
        B
      C


## Markdown Strings

The "Markdown Strings" feature enhances mind maps by offering a more versatile string type, which supports text formatting options such as bold and italics, and automatically wraps text within labels.

mermaid-example
mindmap
    id1["**Root** with
a second line
Unicode works too: 🤓"]
      id2["The dog in **the** hog... a *very long text* that wraps to a new line"]
      id3[Regular labels still works]


Formatting:

- For bold text, use double asterisks \*\* before and after the text.
- For italics, use single asterisks \* before and after the text.
- With traditional strings, you needed to add <br> tags for text to wrap in nodes. However, markdown strings automatically wrap text when it becomes too long and allows you to start a new line by simply using a newline character instead of a <br> tag.

## Integrating with your library/website.

Mindmap uses the experimental lazy loading & async rendering features which could change in the future. From version 9.4.0 this diagram is included in mermaid but use lazy loading in order to keep the size of mermaid down. This is important in order to be able to add additional diagrams going forward.

You can still use the pre 9.4.0 method to add mermaid with mindmaps to a web page:

html
<script type="module">
  import mermaid from '<CDN_URL>/mermaid@9.3.0/dist/mermaid.esm.min.mjs';
  import mindmap from '<CDN_URL>/@mermaid-js/mermaid-mindmap@9.3.0/dist/mermaid-mindmap.esm.min.mjs';
  await mermaid.registerExternalDiagrams([mindmap]);
</script>


From version 9.4.0 you can simplify this code to:

html
<script type="module">
  import mermaid from '<CDN_URL>/mermaid@<MERMAID_VERSION>/dist/mermaid.esm.min.mjs';
</script>


You can also refer the implementation in the live editor [here](https://github.com/mermaid-js/mermaid-live-editor/blob/develop/src/lib/util/mermaid.ts) to see how the async loading is done.

<!---
cspell:locale en,en-gb
cspell:ignore Buzan
--->

# Packet Diagram (v<MERMAID_RELEASE_VERSION>+)

## Introduction

A packet diagram is a visual representation used to illustrate the structure and contents of a network packet. Network packets are the fundamental units of data transferred over a network.

## Usage

This diagram type is particularly useful for network engineers, educators, and students who require a clear and concise way to represent the structure of network packets.

## Syntax

md
packet-beta
start: "Block name" %% Single-bit block
start-end: "Block name" %% Multi-bit blocks
... More Fields ...


## Examples

mermaid-example
---
title: "TCP Packet"
---
packet-beta
0-15: "Source Port"
16-31: "Destination Port"
32-63: "Sequence Number"
64-95: "Acknowledgment Number"
96-99: "Data Offset"
100-105: "Reserved"
106: "URG"
107: "ACK"
108: "PSH"
109: "RST"
110: "SYN"
111: "FIN"
112-127: "Window"
128-143: "Checksum"
144-159: "Urgent Pointer"
160-191: "(Options and Padding)"
192-255: "Data (variable length)"


mermaid-example
packet-beta
title UDP Packet
0-15: "Source Port"
16-31: "Destination Port"
32-47: "Length"
48-63: "Checksum"
64-95: "Data (variable length)"


## Details of Syntax

- **Ranges**: Each line after the title represents a different field in the packet. The range (e.g., 0-15) indicates the bit positions in the packet.
- **Field Description**: A brief description of what the field represents, enclosed in quotes.

## Configuration

Please refer to the [configuration](/config/schema-docs/config-defs-packet-diagram-config.html) guide for details.

<!--

Theme variables are not currently working due to a mermaid bug. The passed values are not being propagated into styles function.

## Theme Variables

| Property         | Description                | Default Value |
| ---------------- | -------------------------- | ------------- |
| byteFontSize     | Font size of the bytes     | '10px'        |
| startByteColor   | Color of the starting byte | 'black'       |
| endByteColor     | Color of the ending byte   | 'black'       |
| labelColor       | Color of the labels        | 'black'       |
| labelFontSize    | Font size of the labels    | '12px'        |
| titleColor       | Color of the title         | 'black'       |
| titleFontSize    | Font size of the title     | '14px'        |
| blockStrokeColor | Color of the block stroke  | 'black'       |
| blockStrokeWidth | Width of the block stroke  | '1'           |
| blockFillColor   | Fill color of the block    | '#efefef'     |

## Example on config and theme

mermaid-example
---
config:
  packet:
    showBits: true
  themeVariables:
    packet:
      startByteColor: red
---
packet-beta
0-15: "Source Port"
16-31: "Destination Port"
32-63: "Sequence Number"


-->

# Sequence diagrams

> A Sequence diagram is an interaction diagram that shows how processes operate with one another and in what order.

Mermaid can render sequence diagrams.

mermaid-example
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!


note
A note on nodes, the word "end" could potentially break the diagram, due to the way that the mermaid language is scripted.

If unavoidable, one must use parentheses(), quotation marks "", or brackets {},[], to enclose the word "end". i.e : (end), [end], {end}.


## Syntax

### Participants

The participants can be defined implicitly as in the first example on this page. The participants or actors are
rendered in order of appearance in the diagram source text. Sometimes you might want to show the participants in a
different order than how they appear in the first message. It is possible to specify the actor's order of
appearance by doing the following:

mermaid-example
sequenceDiagram
    participant Alice
    participant Bob
    Bob->>Alice: Hi Alice
    Alice->>Bob: Hi Bob


### Actors

If you specifically want to use the actor symbol instead of a rectangle with text you can do so by using actor statements as per below.

mermaid-example
sequenceDiagram
    actor Alice
    actor Bob
    Alice->>Bob: Hi Bob
    Bob->>Alice: Hi Alice


### Aliases

The actor can have a convenient identifier and a descriptive label.

mermaid-example
sequenceDiagram
    participant A as Alice
    participant J as John
    A->>J: Hello John, how are you?
    J->>A: Great!


### Actor Creation and Destruction (v10.3.0+)

It is possible to create and destroy actors by messages. To do so, add a create or destroy directive before the message.


create participant B
A --> B: Hello


Create directives support actor/participant distinction and aliases. The sender or the recipient of a message can be destroyed but only the recipient can be created.

mermaid-example
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you ?
    Bob->>Alice: Fine, thank you. And you?
    create participant Carl
    Alice->>Carl: Hi Carl!
    create actor D as Donald
    Carl->>D: Hi!
    destroy Carl
    Alice-xCarl: We are too many
    destroy Bob
    Bob->>Alice: I agree


#### Unfixable actor/participant creation/deletion error

If an error of the following type occurs when creating or deleting an actor/participant:

> The destroyed participant **participant-name** does not have an associated destroying message after its declaration. Please check the sequence diagram.

And fixing diagram code does not get rid of this error and rendering of all other diagrams results in the same error, then you need to update the mermaid version to (v10.7.0+).

### Grouping / Box

The actor(s) can be grouped in vertical boxes. You can define a color (if not, it will be transparent) and/or a descriptive label using the following notation:


box Aqua Group Description
... actors ...
end
box Group without description
... actors ...
end
box rgb(33,66,99)
... actors ...
end


note
If your group name is a color you can force the color to be transparent:



box transparent Aqua
... actors ...
end


mermaid-example
    sequenceDiagram
    box Purple Alice & John
    participant A
    participant J
    end
    box Another Group
    participant B
    participant C
    end
    A->>J: Hello John, how are you?
    J->>A: Great!
    A->>B: Hello Bob, how is Charley?
    B->>C: Hello Charley, how are you?


## Messages

Messages can be of two displayed either solid or with a dotted line.


[Actor][Arrow][Actor]:Message text


There are six types of arrows currently supported:

| Type   | Description                                      |
| ------ | ------------------------------------------------ |
| ->   | Solid line without arrow                         |
| -->  | Dotted line without arrow                        |
| ->>  | Solid line with arrowhead                        |
| -->> | Dotted line with arrowhead                       |
| -x   | Solid line with a cross at the end               |
| --x  | Dotted line with a cross at the end.             |
| -)   | Solid line with an open arrow at the end (async) |
| --)  | Dotted line with a open arrow at the end (async) |

## Activations

It is possible to activate and deactivate an actor. (de)activation can be dedicated declarations:

mermaid-example
sequenceDiagram
    Alice->>John: Hello John, how are you?
    activate John
    John-->>Alice: Great!
    deactivate John


There is also a shortcut notation by appending +/- suffix to the message arrow:

mermaid-example
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    John-->>-Alice: Great!


Activations can be stacked for same actor:

mermaid-example
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!


## Notes

It is possible to add notes to a sequence diagram. This is done by the notation
Note [ right of | left of | over ] [Actor]: Text in note content

See the example below:

mermaid-example
sequenceDiagram
    participant John
    Note right of John: Text in note


It is also possible to create notes spanning two participants:

mermaid-example
sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction


It is also possible to add a line break (applies to text input in general):

mermaid-example
sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction<br/>But now in two lines


## Loops

It is possible to express loops in a sequence diagram. This is done by the notation


loop Loop text
... statements ...
end


See the example below:

mermaid-example
sequenceDiagram
    Alice->John: Hello John, how are you?
    loop Every minute
        John-->Alice: Great!
    end


## Alt

It is possible to express alternative paths in a sequence diagram. This is done by the notation


alt Describing text
... statements ...
else
... statements ...
end


or if there is sequence that is optional (if without else).


opt Describing text
... statements ...
end


See the example below:

mermaid-example
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end


## Parallel

It is possible to show actions that are happening in parallel.

This is done by the notation


par [Action 1]
... statements ...
and [Action 2]
... statements ...
and [Action N]
... statements ...
end


See the example below:

mermaid-example
sequenceDiagram
    par Alice to Bob
        Alice->>Bob: Hello guys!
    and Alice to John
        Alice->>John: Hello guys!
    end
    Bob-->>Alice: Hi Alice!
    John-->>Alice: Hi Alice!


It is also possible to nest parallel blocks.

mermaid-example
sequenceDiagram
    par Alice to Bob
        Alice->>Bob: Go help John
    and Alice to John
        Alice->>John: I want this done today
        par John to Charlie
            John->>Charlie: Can we do this today?
        and John to Diana
            John->>Diana: Can you help us today?
        end
    end


## Critical Region

It is possible to show actions that must happen automatically with conditional handling of circumstances.

This is done by the notation


critical [Action that must be performed]
... statements ...
option [Circumstance A]
... statements ...
option [Circumstance B]
... statements ...
end


See the example below:

mermaid-example
sequenceDiagram
    critical Establish a connection to the DB
        Service-->DB: connect
    option Network timeout
        Service-->Service: Log error
    option Credentials rejected
        Service-->Service: Log different error
    end


It is also possible to have no options at all

mermaid-example
sequenceDiagram
    critical Establish a connection to the DB
        Service-->DB: connect
    end


This critical block can also be nested, equivalently to the par statement as seen above.

## Break

It is possible to indicate a stop of the sequence within the flow (usually used to model exceptions).

This is done by the notation


break [something happened]
... statements ...
end


See the example below:

mermaid-example
sequenceDiagram
    Consumer-->API: Book something
    API-->BookingService: Start booking process
    break when the booking process fails
        API-->Consumer: show failure
    end
    API-->BillingService: Start billing process


## Background Highlighting

It is possible to highlight flows by providing colored background rects. This is done by the notation

The colors are defined using rgb and rgba syntax.


rect rgb(0, 255, 0)
... content ...
end



rect rgba(0, 0, 255, .1)
... content ...
end


See the examples below:

mermaid-example
sequenceDiagram
    participant Alice
    participant John

    rect rgb(191, 223, 255)
    note right of Alice: Alice calls John.
    Alice->>+John: Hello John, how are you?
    rect rgb(200, 150, 255)
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    end
    John-->>-Alice: I feel great!
    end
    Alice ->>+ John: Did you want to go to the game tonight?
    John -->>- Alice: Yeah! See you there.



## Comments

Comments can be entered within a sequence diagram, which will be ignored by the parser. Comments need to be on their own line, and must be prefaced with %% (double percent signs). Any text after the start of the comment to the next newline will be treated as a comment, including any diagram syntax

mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    %% this is a comment
    John-->>Alice: Great!


## Entity codes to escape characters

It is possible to escape characters using the syntax exemplified here.

mermaid-example
sequenceDiagram
    A->>B: I #9829; you!
    B->>A: I #9829; you #infin; times more!


Numbers given are base 10, so # can be encoded as #35;. It is also supported to use HTML character names.

Because semicolons can be used instead of line breaks to define the markup, you need to use #59; to include a semicolon in message text.

## sequenceNumbers

It is possible to get a sequence number attached to each arrow in a sequence diagram. This can be configured when adding mermaid to the website as shown below:

html
<script>
  mermaid.initialize({ sequence: { showSequenceNumbers: true } });
</script>


It can also be turned on via the diagram code as in the diagram:

mermaid-example
sequenceDiagram
    autonumber
    Alice->>John: Hello John, how are you?
    loop HealthCheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!


## Actor Menus

Actors can have popup-menus containing individualized links to external pages. For example, if an actor represented a web service, useful links might include a link to the service health dashboard, repo containing the code for the service, or a wiki page describing the service.

This can be configured by adding one or more link lines with the format:


link <actor>: <link-label> @ <link-url>


mermaid
sequenceDiagram
    participant Alice
    participant John
    link Alice: Dashboard @ https://dashboard.contoso.com/alice
    link Alice: Wiki @ https://wiki.contoso.com/alice
    link John: Dashboard @ https://dashboard.contoso.com/john
    link John: Wiki @ https://wiki.contoso.com/john
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!


#### Advanced Menu Syntax

There is an advanced syntax that relies on JSON formatting. If you are comfortable with JSON format, then this exists as well.

This can be configured by adding the links lines with the format:


links <actor>: <json-formatted link-name link-url pairs>


An example is below:

mermaid-example
sequenceDiagram
    participant Alice
    participant John
    links Alice: {"Dashboard": "https://dashboard.contoso.com/alice", "Wiki": "https://wiki.contoso.com/alice"}
    links John: {"Dashboard": "https://dashboard.contoso.com/john", "Wiki": "https://wiki.contoso.com/john"}
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!


## Styling

Styling of a sequence diagram is done by defining a number of css classes. During rendering these classes are extracted from the file located at src/themes/sequence.scss

### Classes used

| Class          | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| actor          | Styles for the actor box.                                      |
| actor-top      | Styles for the actor figure/ box at the top of the diagram.    |
| actor-bottom   | Styles for the actor figure/ box at the bottom of the diagram. |
| text.actor     | Styles for text of all of the actors.                          |
| text.actor-box | Styles for text of the actor box.                              |
| text.actor-man | Styles for text of the actor figure.                           |
| actor-line     | The vertical line for an actor.                                |
| messageLine0   | Styles for the solid message line.                             |
| messageLine1   | Styles for the dotted message line.                            |
| messageText    | Defines styles for the text on the message arrows.             |
| labelBox       | Defines styles label to left in a loop.                        |
| labelText      | Styles for the text in label for loops.                        |
| loopText       | Styles for the text in the loop box.                           |
| loopLine       | Defines styles for the lines in the loop box.                  |
| note           | Styles for the note box.                                       |
| noteText       | Styles for the text on in the note boxes.                      |

### Sample stylesheet

css
body {
  background: white;
}

.actor {
  stroke: #ccccff;
  fill: #ececff;
}
text.actor {
  fill: black;
  stroke: none;
  font-family: Helvetica;
}

.actor-line {
  stroke: grey;
}

.messageLine0 {
  stroke-width: 1.5;
  stroke-dasharray: '2 2';
  marker-end: 'url(#arrowhead)';
  stroke: black;
}

.messageLine1 {
  stroke-width: 1.5;
  stroke-dasharray: '2 2';
  stroke: black;
}

#arrowhead {
  fill: black;
}

.messageText {
  fill: black;
  stroke: none;
  font-family: 'trebuchet ms', verdana, arial;
  font-size: 14px;
}

.labelBox {
  stroke: #ccccff;
  fill: #ececff;
}

.labelText {
  fill: black;
  stroke: none;
  font-family: 'trebuchet ms', verdana, arial;
}

.loopText {
  fill: black;
  stroke: none;
  font-family: 'trebuchet ms', verdana, arial;
}

.loopLine {
  stroke-width: 2;
  stroke-dasharray: '2 2';
  marker-end: 'url(#arrowhead)';
  stroke: #ccccff;
}

.note {
  stroke: #decc93;
  fill: #fff5ad;
}

.noteText {
  fill: black;
  stroke: none;
  font-family: 'trebuchet ms', verdana, arial;
  font-size: 14px;
}


## Configuration

It is possible to adjust the margins for rendering the sequence diagram.

This is done by defining mermaid.sequenceConfig or by the CLI to use a json file with the configuration.
How to use the CLI is described in the [mermaidCLI](../config/mermaidCLI.md) page.
mermaid.sequenceConfig can be set to a JSON string with config parameters or the corresponding object.

javascript
mermaid.sequenceConfig = {
  diagramMarginX: 50,
  diagramMarginY: 10,
  boxTextMargin: 5,
  noteMargin: 10,
  messageMargin: 35,
  mirrorActors: true,
};


### Possible configuration parameters:

| Parameter         | Description                                                                                                                                | Default value                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| mirrorActors      | Turns on/off the rendering of actors below the diagram as well as above it                                                                 | false                          |
| bottomMarginAdj   | Adjusts how far down the graph ended. Wide borders styles with css could generate unwanted clipping which is why this config param exists. | 1                              |
| actorFontSize     | Sets the font size for the actor's description                                                                                             | 14                             |
| actorFontFamily   | Sets the font family for the actor's description                                                                                           | "Open Sans", sans-serif        |
| actorFontWeight   | Sets the font weight for the actor's description                                                                                           | "Open Sans", sans-serif        |
| noteFontSize      | Sets the font size for actor-attached notes                                                                                                | 14                             |
| noteFontFamily    | Sets the font family for actor-attached notes                                                                                              | "trebuchet ms", verdana, arial |
| noteFontWeight    | Sets the font weight for actor-attached notes                                                                                              | "trebuchet ms", verdana, arial |
| noteAlign         | Sets the text alignment for text in actor-attached notes                                                                                   | center                         |
| messageFontSize   | Sets the font size for actor<->actor messages                                                                                              | 16                             |
| messageFontFamily | Sets the font family for actor<->actor messages                                                                                            | "trebuchet ms", verdana, arial |
| messageFontWeight | Sets the font weight for actor<->actor messages                                                                                            | "trebuchet ms", verdana, arial |;

# C4 Diagrams

> C4 Diagram: This is an experimental diagram for now. The syntax and properties can change in future releases. Proper documentation will be provided when the syntax is stable.

Mermaid's C4 diagram syntax is compatible with plantUML. See example below:

mermaid-example
    C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, "BankBoundary0") {
        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
        Person(customerB, "Banking Customer B")
        Person_Ext(customerC, "Banking Customer C", "desc")

        Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

        Enterprise_Boundary(b1, "BankBoundary") {

          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

          System_Boundary(b2, "BankBoundary2") {
            System(SystemA, "Banking System A")
            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")
          }

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

          Boundary(b3, "BankBoundary3", "boundary") {
            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")
            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
          }
        }
      }

      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemE, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Sends e-mails to")

      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")




For an example, see the source code demos/index.html

5 types of C4 charts are supported.

- System Context (C4Context)
- Container diagram (C4Container)
- Component diagram (C4Component)
- Dynamic diagram (C4Dynamic)
- Deployment diagram (C4Deployment)

Please refer to the linked document [C4-PlantUML syntax](https://github.com/plantuml-stdlib/C4-PlantUML/blob/master/README.md) for how to write the C4 diagram.

C4 diagram is fixed style, such as css color, so different css is not provided under different skins.
updateElementStyle and UpdateElementStyle are written in the diagram last part. updateElementStyle is inconsistent with the original definition and updates the style of the relationship, including the offset of the text label relative to the original position.

The layout does not use a fully automated layout algorithm. The position of shapes is adjusted by changing the order in which statements are written. So there is no plan to support the following Layout statements.
The number of shapes per row and the number of boundaries can be adjusted using UpdateLayoutConfig.

- Layout
  - Lay_U, Lay_Up
  - Lay_D, Lay_Down
  - Lay_L, Lay_Left
  - Lay_R, Lay_Right

The following unfinished features are not supported in the short term.

- [ ] sprite
- [ ] tags
- [ ] link
- [ ] Legend

- [x] System Context

  - [x] Person(alias, label, ?descr, ?sprite, ?tags, $link)
  - [x] Person_Ext
  - [x] System(alias, label, ?descr, ?sprite, ?tags, $link)
  - [x] SystemDb
  - [x] SystemQueue
  - [x] System_Ext
  - [x] SystemDb_Ext
  - [x] SystemQueue_Ext
  - [x] Boundary(alias, label, ?type, ?tags, $link)
  - [x] Enterprise_Boundary(alias, label, ?tags, $link)
  - [x] System_Boundary

- [x] Container diagram

  - [x] Container(alias, label, ?techn, ?descr, ?sprite, ?tags, $link)
  - [x] ContainerDb
  - [x] ContainerQueue
  - [x] Container_Ext
  - [x] ContainerDb_Ext
  - [x] ContainerQueue_Ext
  - [x] Container_Boundary(alias, label, ?tags, $link)

- [x] Component diagram

  - [x] Component(alias, label, ?techn, ?descr, ?sprite, ?tags, $link)
  - [x] ComponentDb
  - [x] ComponentQueue
  - [x] Component_Ext
  - [x] ComponentDb_Ext
  - [x] ComponentQueue_Ext

- [x] Dynamic diagram

  - [x] RelIndex(index, from, to, label, ?tags, $link)

- [x] Deployment diagram

  - [x] Deployment_Node(alias, label, ?type, ?descr, ?sprite, ?tags, $link)
  - [x] Node(alias, label, ?type, ?descr, ?sprite, ?tags, $link): short name of Deployment_Node()
  - [x] Node_L(alias, label, ?type, ?descr, ?sprite, ?tags, $link): left aligned Node()
  - [x] Node_R(alias, label, ?type, ?descr, ?sprite, ?tags, $link): right aligned Node()

- [x] Relationship Types

  - [x] Rel(from, to, label, ?techn, ?descr, ?sprite, ?tags, $link)
  - [x] BiRel (bidirectional relationship)
  - [x] Rel_U, Rel_Up
  - [x] Rel_D, Rel_Down
  - [x] Rel_L, Rel_Left
  - [x] Rel_R, Rel_Right
  - [x] Rel_Back
  - [x] RelIndex \* Compatible with C4-PlantUML syntax, but ignores the index parameter. The sequence number is determined by the order in which the rel statements are written.

- [ ] Custom tags/stereotypes support and skin param updates
  - [ ] AddElementTag(tagStereo, ?bgColor, ?fontColor, ?borderColor, ?shadowing, ?shape, ?sprite, ?techn, ?legendText, ?legendSprite): Introduces a new element tag. The styles of the tagged elements are updated and the tag is displayed in the calculated legend.
  - [ ] AddRelTag(tagStereo, ?textColor, ?lineColor, ?lineStyle, ?sprite, ?techn, ?legendText, ?legendSprite): Introduces a new Relationship tag. The styles of the tagged relationships are updated and the tag is displayed in the calculated legend.
  - [x] UpdateElementStyle(elementName, ?bgColor, ?fontColor, ?borderColor, ?shadowing, ?shape, ?sprite, ?techn, ?legendText, ?legendSprite): This call updates the default style of the elements (component, ...) and creates no additional legend entry.
  - [x] UpdateRelStyle(from, to, ?textColor, ?lineColor, ?offsetX, ?offsetY): This call updates the default relationship colors and creates no additional legend entry. Two new parameters, offsetX and offsetY, are added to set the offset of the original position of the text.
  - [ ] RoundedBoxShape(): This call returns the name of the rounded box shape and can be used as ?shape argument.
  - [ ] EightSidedShape(): This call returns the name of the eight sided shape and can be used as ?shape argument.
  - [ ] DashedLine(): This call returns the name of the dashed line and can be used as ?lineStyle argument.
  - [ ] DottedLine(): This call returns the name of the dotted line and can be used as ?lineStyle argument.
  - [ ] BoldLine(): This call returns the name of the bold line and can be used as ?lineStyle argument.
  - [x] UpdateLayoutConfig(?c4ShapeInRow, ?c4BoundaryInRow): New. This call updates the default c4ShapeInRow(4) and c4BoundaryInRow(2).

There are two ways to assign parameters with question marks. One uses the non-named parameter assignment method in the order of the parameters, and the other uses the named parameter assignment method, where the name must start with a $ symbol.

Example: UpdateRelStyle(from, to, ?textColor, ?lineColor, ?offsetX, ?offsetY)


UpdateRelStyle(customerA, bankA, "red", "blue", "-40", "60")
UpdateRelStyle(customerA, bankA, $offsetX="-40", $offsetY="60", $lineColor="blue", $textColor="red")
UpdateRelStyle(customerA, bankA, $offsetY="60")



## C4 System Context Diagram (C4Context)

mermaid-example
    C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, "BankBoundary0") {
        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
        Person(customerB, "Banking Customer B")
        Person_Ext(customerC, "Banking Customer C", "desc")

        Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

        Enterprise_Boundary(b1, "BankBoundary") {

          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

          System_Boundary(b2, "BankBoundary2") {
            System(SystemA, "Banking System A")
            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")
          }

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

          Boundary(b3, "BankBoundary3", "boundary") {
            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")
            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
          }
        }
      }

      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemE, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Sends e-mails to")

      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")



## C4 Container diagram (C4Container)

mermaid-example
    C4Container
    title Container diagram for Internet Banking System

    System_Ext(email_system, "E-Mail System", "The internal Microsoft Exchange system", $tags="v1.0")
    Person(customer, Customer, "A customer of the bank, with personal bank accounts", $tags="v1.0")

    Container_Boundary(c1, "Internet Banking") {
        Container(spa, "Single-Page App", "JavaScript, Angular", "Provides all the Internet banking functionality to customers via their web browser")
        Container_Ext(mobile_app, "Mobile App", "C#, Xamarin", "Provides a limited subset of the Internet banking functionality to customers via their mobile device")
        Container(web_app, "Web Application", "Java, Spring MVC", "Delivers the static content and the Internet banking SPA")
        ContainerDb(database, "Database", "SQL Database", "Stores user registration information, hashed auth credentials, access logs, etc.")
        ContainerDb_Ext(backend_api, "API Application", "Java, Docker Container", "Provides Internet banking functionality via API")

    }

    System_Ext(banking_system, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

    Rel(customer, web_app, "Uses", "HTTPS")
    UpdateRelStyle(customer, web_app, $offsetY="60", $offsetX="90")
    Rel(customer, spa, "Uses", "HTTPS")
    UpdateRelStyle(customer, spa, $offsetY="-40")
    Rel(customer, mobile_app, "Uses")
    UpdateRelStyle(customer, mobile_app, $offsetY="-30")

    Rel(web_app, spa, "Delivers")
    UpdateRelStyle(web_app, spa, $offsetX="130")
    Rel(spa, backend_api, "Uses", "async, JSON/HTTPS")
    Rel(mobile_app, backend_api, "Uses", "async, JSON/HTTPS")
    Rel_Back(database, backend_api, "Reads from and writes to", "sync, JDBC")

    Rel(email_system, customer, "Sends e-mails to")
    UpdateRelStyle(email_system, customer, $offsetX="-45")
    Rel(backend_api, email_system, "Sends e-mails using", "sync, SMTP")
    UpdateRelStyle(backend_api, email_system, $offsetY="-60")
    Rel(backend_api, banking_system, "Uses", "sync/async, XML/HTTPS")
    UpdateRelStyle(backend_api, banking_system, $offsetY="-50", $offsetX="-140")



## C4 Component diagram (C4Component)

mermaid-example
    C4Component
    title Component diagram for Internet Banking System - API Application

    Container(spa, "Single Page Application", "javascript and angular", "Provides all the internet banking functionality to customers via their web browser.")
    Container(ma, "Mobile App", "Xamarin", "Provides a limited subset to the internet banking functionality to customers via their mobile mobile device.")
    ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
    System_Ext(mbs, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

    Container_Boundary(api, "API Application") {
        Component(sign, "Sign In Controller", "MVC Rest Controller", "Allows users to sign in to the internet banking system")
        Component(accounts, "Accounts Summary Controller", "MVC Rest Controller", "Provides customers with a summary of their bank accounts")
        Component(security, "Security Component", "Spring Bean", "Provides functionality related to singing in, changing passwords, etc.")
        Component(mbsfacade, "Mainframe Banking System Facade", "Spring Bean", "A facade onto the mainframe banking system.")

        Rel(sign, security, "Uses")
        Rel(accounts, mbsfacade, "Uses")
        Rel(security, db, "Read & write to", "JDBC")
        Rel(mbsfacade, mbs, "Uses", "XML/HTTPS")
    }

    Rel_Back(spa, sign, "Uses", "JSON/HTTPS")
    Rel(spa, accounts, "Uses", "JSON/HTTPS")

    Rel(ma, sign, "Uses", "JSON/HTTPS")
    Rel(ma, accounts, "Uses", "JSON/HTTPS")

    UpdateRelStyle(spa, sign, $offsetY="-40")
    UpdateRelStyle(spa, accounts, $offsetX="40", $offsetY="40")

    UpdateRelStyle(ma, sign, $offsetX="-90", $offsetY="40")
    UpdateRelStyle(ma, accounts, $offsetY="-40")

        UpdateRelStyle(sign, security, $offsetX="-160", $offsetY="10")
        UpdateRelStyle(accounts, mbsfacade, $offsetX="140", $offsetY="10")
        UpdateRelStyle(security, db, $offsetY="-40")
        UpdateRelStyle(mbsfacade, mbs, $offsetY="-40")



## C4 Dynamic diagram (C4Dynamic)

mermaid-example
    C4Dynamic
    title Dynamic diagram for Internet Banking System - API Application

    ContainerDb(c4, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
    Container(c1, "Single-Page Application", "JavaScript and Angular", "Provides all of the Internet banking functionality to customers via their web browser.")
    Container_Boundary(b, "API Application") {
      Component(c3, "Security Component", "Spring Bean", "Provides functionality Related to signing in, changing passwords, etc.")
      Component(c2, "Sign In Controller", "Spring MVC Rest Controller", "Allows users to sign in to the Internet Banking System.")
    }
    Rel(c1, c2, "Submits credentials to", "JSON/HTTPS")
    Rel(c2, c3, "Calls isAuthenticated() on")
    Rel(c3, c4, "select * from users where username = ?", "JDBC")

    UpdateRelStyle(c1, c2, $textColor="red", $offsetY="-40")
    UpdateRelStyle(c2, c3, $textColor="red", $offsetX="-40", $offsetY="60")
    UpdateRelStyle(c3, c4, $textColor="red", $offsetY="-40", $offsetX="10")



## C4 Deployment diagram (C4Deployment)

mermaid-example
    C4Deployment
    title Deployment Diagram for Internet Banking System - Live

    Deployment_Node(mob, "Customer's mobile device", "Apple IOS or Android"){
        Container(mobile, "Mobile App", "Xamarin", "Provides a limited subset of the Internet Banking functionality to customers via their mobile device.")
    }

    Deployment_Node(comp, "Customer's computer", "Microsoft Windows or Apple macOS"){
        Deployment_Node(browser, "Web Browser", "Google Chrome, Mozilla Firefox,<br/> Apple Safari or Microsoft Edge"){
            Container(spa, "Single Page Application", "JavaScript and Angular", "Provides all of the Internet Banking functionality to customers via their web browser.")
        }
    }

    Deployment_Node(plc, "Big Bank plc", "Big Bank plc data center"){
        Deployment_Node(dn, "bigbank-api*** x8", "Ubuntu 16.04 LTS"){
            Deployment_Node(apache, "Apache Tomcat", "Apache Tomcat 8.x"){
                Container(api, "API Application", "Java and Spring MVC", "Provides Internet Banking functionality via a JSON/HTTPS API.")
            }
        }
        Deployment_Node(bb2, "bigbank-web*** x4", "Ubuntu 16.04 LTS"){
            Deployment_Node(apache2, "Apache Tomcat", "Apache Tomcat 8.x"){
                Container(web, "Web Application", "Java and Spring MVC", "Delivers the static content and the Internet Banking single page application.")
            }
        }
        Deployment_Node(bigbankdb01, "bigbank-db01", "Ubuntu 16.04 LTS"){
            Deployment_Node(oracle, "Oracle - Primary", "Oracle 12c"){
                ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
            }
        }
        Deployment_Node(bigbankdb02, "bigbank-db02", "Ubuntu 16.04 LTS") {
            Deployment_Node(oracle2, "Oracle - Secondary", "Oracle 12c") {
                ContainerDb(db2, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
            }
        }
    }

    Rel(mobile, api, "Makes API calls to", "json/HTTPS")
    Rel(spa, api, "Makes API calls to", "json/HTTPS")
    Rel_U(web, spa, "Delivers to the customer's web browser")
    Rel(api, db, "Reads from and writes to", "JDBC")
    Rel(api, db2, "Reads from and writes to", "JDBC")
    Rel_R(db, db2, "Replicates data to")

    UpdateRelStyle(spa, api, $offsetY="-40")
    UpdateRelStyle(web, spa, $offsetY="-40")
    UpdateRelStyle(api, db, $offsetY="-20", $offsetX="5")
    UpdateRelStyle(api, db2, $offsetX="-40", $offsetY="-20")
    UpdateRelStyle(db, db2, $offsetY="-10")



<!--- cspell:ignore bigbank bigbankdb techn mbsfacade  --->

# Requirement Diagram

> A Requirement diagram provides a visualization for requirements and their connections, to each other and other documented elements. The modeling specs follow those defined by SysML v1.6.

Rendering requirements is straightforward.

mermaid-example
    requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    element test_entity {
    type: simulation
    }

    test_entity - satisfies -> test_req


## Syntax

There are three types of components to a requirement diagram: requirement, element, and relationship.

The grammar for defining each is defined below. Words denoted in angle brackets, such as <word>, are enumerated keywords that have options elaborated in a table. user_defined_... is use in any place where user input is expected.

An important note on user text: all input can be surrounded in quotes or not. For example, both Id: "here is an example" and Id: here is an example are both valid. However, users must be careful with unquoted input. The parser will fail if another keyword is detected.

### Requirement

A requirement definition contains a requirement type, name, id, text, risk, and verification method. The syntax follows:


<type> user_defined_name {
    id: user_defined_id
    text: user_defined text
    risk: <risk>
    verifymethod: <method>
}


Type, risk, and method are enumerations defined in SysML.

| Keyword            | Options                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Type               | requirement, functionalRequirement, interfaceRequirement, performanceRequirement, physicalRequirement, designConstraint |
| Risk               | Low, Medium, High                                                                                                       |
| VerificationMethod | Analysis, Inspection, Test, Demonstration                                                                               |

### Element

An element definition contains an element name, type, and document reference. These three are all user defined. The element feature is intended to be lightweight but allow requirements to be connected to portions of other documents.


element user_defined_name {
    type: user_defined_type
    docref: user_defined_ref
}


### Relationship

Relationships are comprised of a source node, destination node, and relationship type.

Each follows the definition format of


{name of source} - <type> -> {name of destination}


or


{name of destination} <- <type> - {name of source}


"name of source" and "name of destination" should be names of requirement or element nodes defined elsewhere.

A relationship type can be one of contains, copies, derives, satisfies, verifies, refines, or traces.

Each relationship is labeled in the diagram.

## Larger Example

This example uses all features of the diagram.

mermaid-example
    requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    functionalRequirement test_req2 {
    id: 1.1
    text: the second test text.
    risk: low
    verifymethod: inspection
    }

    performanceRequirement test_req3 {
    id: 1.2
    text: the third test text.
    risk: medium
    verifymethod: demonstration
    }

    interfaceRequirement test_req4 {
    id: 1.2.1
    text: the fourth test text.
    risk: medium
    verifymethod: analysis
    }

    physicalRequirement test_req5 {
    id: 1.2.2
    text: the fifth test text.
    risk: medium
    verifymethod: analysis
    }

    designConstraint test_req6 {
    id: 1.2.3
    text: the sixth test text.
    risk: medium
    verifymethod: analysis
    }

    element test_entity {
    type: simulation
    }

    element test_entity2 {
    type: word doc
    docRef: reqs/test_entity
    }

    element test_entity3 {
    type: "test suite"
    docRef: github.com/all_the_tests
    }


    test_entity - satisfies -> test_req2
    test_req - traces -> test_req2
    test_req - contains -> test_req3
    test_req3 - contains -> test_req4
    test_req4 - derives -> test_req5
    test_req5 - refines -> test_req6
    test_entity3 - verifies -> test_req5
    test_req <- copies - test_entity2


<!--- cspell:ignore reqs --->

# Sankey diagram (v10.3.0+)

> A sankey diagram is a visualization used to depict a flow from one set of values to another.

warning
This is an experimental diagram. Its syntax are very close to plain CSV, but it is to be extended in the nearest future.


The things being connected are called nodes and the connections are called links.

## Example

This example taken from [observable](https://observablehq.com/@d3/sankey/2?collection=@d3/d3-sankey). It may be rendered a little bit differently, though, in terms of size and colors.

mermaid-example
---
config:
  sankey:
    showValues: false
---
sankey-beta

Agricultural 'waste',Bio-conversion,124.729
Bio-conversion,Liquid,0.597
Bio-conversion,Losses,26.862
Bio-conversion,Solid,280.322
Bio-conversion,Gas,81.144
Biofuel imports,Liquid,35
Biomass imports,Solid,35
Coal imports,Coal,11.606
Coal reserves,Coal,63.965
Coal,Solid,75.571
District heating,Industry,10.639
District heating,Heating and cooling - commercial,22.505
District heating,Heating and cooling - homes,46.184
Electricity grid,Over generation / exports,104.453
Electricity grid,Heating and cooling - homes,113.726
Electricity grid,H2 conversion,27.14
Electricity grid,Industry,342.165
Electricity grid,Road transport,37.797
Electricity grid,Agriculture,4.412
Electricity grid,Heating and cooling - commercial,40.858
Electricity grid,Losses,56.691
Electricity grid,Rail transport,7.863
Electricity grid,Lighting & appliances - commercial,90.008
Electricity grid,Lighting & appliances - homes,93.494
Gas imports,Ngas,40.719
Gas reserves,Ngas,82.233
Gas,Heating and cooling - commercial,0.129
Gas,Losses,1.401
Gas,Thermal generation,151.891
Gas,Agriculture,2.096
Gas,Industry,48.58
Geothermal,Electricity grid,7.013
H2 conversion,H2,20.897
H2 conversion,Losses,6.242
H2,Road transport,20.897
Hydro,Electricity grid,6.995
Liquid,Industry,121.066
Liquid,International shipping,128.69
Liquid,Road transport,135.835
Liquid,Domestic aviation,14.458
Liquid,International aviation,206.267
Liquid,Agriculture,3.64
Liquid,National navigation,33.218
Liquid,Rail transport,4.413
Marine algae,Bio-conversion,4.375
Ngas,Gas,122.952
Nuclear,Thermal generation,839.978
Oil imports,Oil,504.287
Oil reserves,Oil,107.703
Oil,Liquid,611.99
Other waste,Solid,56.587
Other waste,Bio-conversion,77.81
Pumped heat,Heating and cooling - homes,193.026
Pumped heat,Heating and cooling - commercial,70.672
Solar PV,Electricity grid,59.901
Solar Thermal,Heating and cooling - homes,19.263
Solar,Solar Thermal,19.263
Solar,Solar PV,59.901
Solid,Agriculture,0.882
Solid,Thermal generation,400.12
Solid,Industry,46.477
Thermal generation,Electricity grid,525.531
Thermal generation,Losses,787.129
Thermal generation,District heating,79.329
Tidal,Electricity grid,9.452
UK land based bioenergy,Bio-conversion,182.01
Wave,Electricity grid,19.013
Wind,Electricity grid,289.366


## Syntax

The idea behind syntax is that a user types sankey-beta keyword first, then pastes raw CSV below and get the result.

It implements CSV standard as [described here](https://www.ietf.org/rfc/rfc4180.txt) with subtle **differences**:

- CSV must contain **3 columns only**
- It is **allowed** to have **empty lines** without comma separators for visual purposes

### Basic

It is implied that 3 columns inside CSV should represent source, target and value accordingly:

mermaid-example
sankey-beta

%% source,target,value
Electricity grid,Over generation / exports,104.453
Electricity grid,Heating and cooling - homes,113.726
Electricity grid,H2 conversion,27.14


### Empty Lines

CSV does not support empty lines without comma delimiters by default. But you can add them if needed:

mermaid-example
sankey-beta

Bio-conversion,Losses,26.862

Bio-conversion,Solid,280.322

Bio-conversion,Gas,81.144


### Commas

If you need to have a comma, wrap it in double quotes:

mermaid-example
sankey-beta

Pumped heat,"Heating and cooling, homes",193.026
Pumped heat,"Heating and cooling, commercial",70.672


### Double Quotes

If you need to have double quote, put a pair of them inside quoted string:

mermaid-example
sankey-beta

Pumped heat,"Heating and cooling, ""homes""",193.026
Pumped heat,"Heating and cooling, ""commercial""",70.672


## Configuration

You can customize link colors, node alignments and diagram dimensions.

html
<script>
  const config = {
    startOnLoad: true,
    securityLevel: 'loose',
    sankey: {
      width: 800,
      height: 400,
      linkColor: 'source',
      nodeAlignment: 'left',
    },
  };
  mermaid.initialize(config);
</script>


### Links Coloring

You can adjust links' color by setting linkColor to one of those:

- source - link will be of a source node color
- target - link will be of a target node color
- gradient - link color will be smoothly transient between source and target node colors
- hex code of color, like #a1a1a1

### Node Alignment

Graph layout can be changed by setting nodeAlignment to:

- justify
- center
- left
- right

<!--- cspell:ignore Ngas bioenergy biofuel --->

# State diagrams

> "A state diagram is a type of diagram used in computer science and related fields to describe the behavior of systems.
> State diagrams require that the system described is composed of a finite number of states; sometimes, this is indeed the
> case, while at other times this is a reasonable abstraction." Wikipedia

Mermaid can render state diagrams. The syntax tries to be compliant with the syntax used in plantUml as this will make
it easier for users to share diagrams between mermaid and plantUml.

mermaid-example
---
title: Simple sample
---
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]


Older renderer:

mermaid-example
stateDiagram
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]


In state diagrams systems are described in terms of _states_ and how one _state_ can change to another _state_ via
a _transition._ The example diagram above shows three states: **Still**, **Moving** and **Crash**. You start in the
**Still** state. From **Still** you can change to the **Moving** state. From **Moving** you can change either back to the **Still** state or to
the **Crash** state. There is no transition from **Still** to **Crash**. (You can't crash if you're still.)

## States

A state can be declared in multiple ways. The simplest way is to define a state with just an id:

mermaid-example
stateDiagram-v2
    stateId


Another way is by using the state keyword with a description as per below:

mermaid-example
stateDiagram-v2
    state "This is a state description" as s2


Another way to define a state with a description is to define the state id followed by a colon and the description:

mermaid-example
stateDiagram-v2
    s2 : This is a state description


## Transitions

Transitions are path/edges when one state passes into another. This is represented using text arrow, "\-\-\>".

When you define a transition between two states and the states are not already defined, the undefined states are defined
with the id from the transition. You can later add descriptions to states defined this way.

mermaid-example
stateDiagram-v2
    s1 --> s2


It is possible to add text to a transition to describe what it represents:

mermaid-example
stateDiagram-v2
    s1 --> s2: A transition


## Start and End

There are two special states indicating the start and stop of the diagram. These are written with the [\*] syntax and
the direction of the transition to it defines it either as a start or a stop state.

mermaid-example
stateDiagram-v2
    [*] --> s1
    s1 --> [*]


## Composite states

In a real world use of state diagrams you often end up with diagrams that are multidimensional as one state can
have several internal states. These are called composite states in this terminology.

In order to define a composite state you need to use the state keyword followed by an id and the body of the composite
state between \{\}. See the example below:

mermaid-example
stateDiagram-v2
    [*] --> First
    state First {
        [*] --> second
        second --> [*]
    }


You can do this in several layers:

mermaid-example
stateDiagram-v2
    [*] --> First

    state First {
        [*] --> Second

        state Second {
            [*] --> second
            second --> Third

            state Third {
                [*] --> third
                third --> [*]
            }
        }
    }


You can also define transitions also between composite states:

mermaid-example
stateDiagram-v2
    [*] --> First
    First --> Second
    First --> Third

    state First {
        [*] --> fir
        fir --> [*]
    }
    state Second {
        [*] --> sec
        sec --> [*]
    }
    state Third {
        [*] --> thi
        thi --> [*]
    }


_You can not define transitions between internal states belonging to different composite states_

## Choice

Sometimes you need to model a choice between two or more paths, you can do so using &lt;&lt;choice&gt;&gt;.

mermaid-example
stateDiagram-v2
    state if_state <<choice>>
    [*] --> IsPositive
    IsPositive --> if_state
    if_state --> False: if n < 0
    if_state --> True : if n >= 0


## Forks

It is possible to specify a fork in the diagram using &lt;&lt;fork&gt;&gt; &lt;&lt;join&gt;&gt;.

mermaid-example
   stateDiagram-v2
    state fork_state <<fork>>
      [*] --> fork_state
      fork_state --> State2
      fork_state --> State3

      state join_state <<join>>
      State2 --> join_state
      State3 --> join_state
      join_state --> State4
      State4 --> [*]


## Notes

Sometimes nothing says it better than a Post-it note. That is also the case in state diagrams.

Here you can choose to put the note to the _right of_ or to the _left of_ a node.

mermaid-example
    stateDiagram-v2
        State1: The state with a note
        note right of State1
            Important information! You can write
            notes.
        end note
        State1 --> State2
        note left of State2 : This is the note to the left.


## Concurrency

As in plantUml you can specify concurrency using the -- symbol.

mermaid-example
stateDiagram-v2
    [*] --> Active

    state Active {
        [*] --> NumLockOff
        NumLockOff --> NumLockOn : EvNumLockPressed
        NumLockOn --> NumLockOff : EvNumLockPressed
        --
        [*] --> CapsLockOff
        CapsLockOff --> CapsLockOn : EvCapsLockPressed
        CapsLockOn --> CapsLockOff : EvCapsLockPressed
        --
        [*] --> ScrollLockOff
        ScrollLockOff --> ScrollLockOn : EvScrollLockPressed
        ScrollLockOn --> ScrollLockOff : EvScrollLockPressed
    }


## Setting the direction of the diagram

With state diagrams you can use the direction statement to set the direction which the diagram will render like in this
example.

mermaid-example
stateDiagram
    direction LR
    [*] --> A
    A --> B
    B --> C
    state B {
      direction LR
      a --> b
    }
    B --> D


## Comments

Comments can be entered within a state diagram chart, which will be ignored by the parser. Comments need to be on their
own line, and must be prefaced with %% (double percent signs). Any text after the start of the comment to the next
newline will be treated as a comment, including any diagram syntax

mermaid
stateDiagram-v2
    [*] --> Still
    Still --> [*]
%% this is a comment
    Still --> Moving
    Moving --> Still %% another comment
    Moving --> Crash
    Crash --> [*]


## Styling with classDefs

As with other diagrams (like flowcharts), you can define a style in the diagram itself and apply that named style to a
state or states in the diagram.

**These are the current limitations with state diagram classDefs:**

1. Cannot be applied to start or end states
2. Cannot be applied to or within composite states

_These are in development and will be available in a future version._

You define a style using the classDef keyword, which is short for "class definition" (where "class" means something
like a _CSS class_)
followed by _a name for the style,_
and then one or more _property-value pairs_. Each _property-value pair_ is
a _[valid CSS property name](https://www.w3.org/TR/CSS/#properties)_ followed by a colon (:) and then a _value._

Here is an example of a classDef with just one property-value pair:


    classDef movement font-style:italic;


where

- the _name_ of the style is movement
- the only _property_ is font-style and its _value_ is italic

If you want to have more than one _property-value pair_ then you put a comma (,) between each _property-value pair._

Here is an example with three property-value pairs:


    classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow


where

- the _name_ of the style is badBadEvent
- the first _property_ is fill and its _value_ is #f00
- the second _property_ is color and its _value_ is white
- the third _property_ is font-weight and its _value_ is bold
- the fourth _property_ is stroke-width and its _value_ is 2px
- the fifth _property_ is stroke and its _value_ is yellow

### Apply classDef styles to states

There are two ways to apply a classDef style to a state:

1. use the class keyword to apply a classDef style to one or more states in a single statement, or
2. use the ::: operator to apply a classDef style to a state as it is being used in a transition statement (e.g. with an arrow
   to/from another state)

#### 1. class statement

A class statement tells Mermaid to apply the named classDef to one or more classes. The form is:

txt
    class [one or more state names, separated by commas] [name of a style defined with classDef]


Here is an example applying the badBadEvent style to a state named Crash:

txt
class Crash badBadEvent


Here is an example applying the movement style to the two states Moving and Crash:

txt
class Moving, Crash movement


Here is a diagram that shows the examples in use. Note that the Crash state has two classDef styles applied: movement
and badBadEvent

mermaid-example
   stateDiagram
   direction TB

   accTitle: This is the accessible title
   accDescr: This is an accessible description

   classDef notMoving fill:white
   classDef movement font-style:italic
   classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow

   [*]--> Still
   Still --> [*]
   Still --> Moving
   Moving --> Still
   Moving --> Crash
   Crash --> [*]

   class Still notMoving
   class Moving, Crash movement
   class Crash badBadEvent
   class end badBadEvent


#### 2. ::: operator to apply a style to a state

You can apply a classDef style to a state using the ::: (three colons) operator. The syntax is

txt
[state]:::[style name]


You can use this in a diagram within a statement using a class. This includes the start and end states. For example:

mermaid-example
stateDiagram
   direction TB

   accTitle: This is the accessible title
   accDescr: This is an accessible description

   classDef notMoving fill:white
   classDef movement font-style:italic;
   classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow

   [*] --> Still:::notMoving
   Still --> [*]
   Still --> Moving:::movement
   Moving --> Still
   Moving --> Crash:::movement
   Crash:::badBadEvent --> [*]


## Spaces in state names

Spaces can be added to a state by first defining the state with an id and then referencing the id later.

In the following example there is a state with the id **yswsii** and description **Your state with spaces in it**.
After it has been defined, **yswsii** is used in the diagram in the first transition ([*] --> yswsii)
and also in the transition to **YetAnotherState** (yswsii --> YetAnotherState).
(**yswsii** has been styled so that it is different from the other states.)

mermaid-example
stateDiagram
    classDef yourState font-style:italic,font-weight:bold,fill:white

    yswsii: Your state with spaces in it
    [*] --> yswsii:::yourState
    [*] --> SomeOtherState
    SomeOtherState --> YetAnotherState
    yswsii --> YetAnotherState
    YetAnotherState --> [*]


<!--- cspell:ignore yswsii --->

# Timeline Diagram

> Timeline: This is an experimental diagram for now. The syntax and properties can change in future releases. The syntax is stable except for the icon integration which is the experimental part.

"A timeline is a type of diagram used to illustrate a chronology of events, dates, or periods of time. It is usually presented graphically to indicate the passing of time, and it is usually organized chronologically. A basic timeline presents a list of events in chronological order, usually using dates as markers. A timeline can also be used to show the relationship between events, such as the relationship between the events of a person's life" [(Wikipedia)](https://en.wikipedia.org/wiki/Timeline).

### An example of a timeline

mermaid
timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : Youtube
    2006 : Twitter


## Syntax

The syntax for creating Timeline diagram is simple. You always start with the timeline keyword to let mermaid know that you want to create a timeline diagram.

After that there is a possibility to add a title to the timeline. This is done by adding a line with the keyword title followed by the title text.

Then you add the timeline data, where you always start with a time period, followed by a colon and then the text for the event. Optionally you can add a second colon and then the text for the event. So, you can have one or more events per time period.

json
{time period} : {event}


or

json
{time period} : {event} : {event}


or

json
{time period} : {event}
              : {event}
              : {event}


**NOTE**: Both time period and event are simple text, and not limited to numbers.

Let us look at the syntax for the example above.

mermaid-example
timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook : Google
    2005 : Youtube
    2006 : Twitter


In this way we can use a text outline to generate a timeline diagram.
The sequence of time period and events is important, as it will be used to draw the timeline. The first time period will be placed at the left side of the timeline, and the last time period will be placed at the right side of the timeline.

Similarly, the first event will be placed at the top for that specific time period, and the last event will be placed at the bottom.

## Grouping of time periods in sections/ages

You can group time periods in sections/ages. This is done by adding a line with the keyword section followed by the section name.

All subsequent time periods will be placed in this section until a new section is defined.

If no section is defined, all time periods will be placed in the default section.

Let us look at an example, where we have grouped the time periods in sections.

mermaid-example
timeline
    title Timeline of Industrial Revolution
    section 17th-20th century
        Industry 1.0 : Machinery, Water power, Steam <br>power
        Industry 2.0 : Electricity, Internal combustion engine, Mass production
        Industry 3.0 : Electronics, Computers, Automation
    section 21st century
        Industry 4.0 : Internet, Robotics, Internet of Things
        Industry 5.0 : Artificial intelligence, Big data, 3D printing


As you can see, the time periods are placed in the sections, and the sections are placed in the order they are defined.

All time periods and events under a given section follow a similar color scheme. This is done to make it easier to see the relationship between time periods and events.

## Wrapping of text for long time-periods or events

By default, the text for time-periods and events will be wrapped if it is too long. This is done to avoid that the text is drawn outside the diagram.

You can also use <br> to force a line break.

Let us look at another example, where we have a long time period, and a long event.

mermaid-example
timeline
        title England's History Timeline
        section Stone Age
          7600 BC : Britain's oldest known house was built in Orkney, Scotland
          6000 BC : Sea levels rise and Britain becomes an island.<br> The people who live here are hunter-gatherers.
        section Bronze Age
          2300 BC : People arrive from Europe and settle in Britain. <br>They bring farming and metalworking.
                  : New styles of pottery and ways of burying the dead appear.
          2200 BC : The last major building works are completed at Stonehenge.<br> People now bury their dead in stone circles.
                  : The first metal objects are made in Britain.Some other nice things happen. it is a good time to be alive.



mermaid-example
timeline
        title MermaidChart 2023 Timeline
        section 2023 Q1 <br> Release Personal Tier
          Bullet 1 : sub-point 1a : sub-point 1b
               : sub-point 1c
          Bullet 2 : sub-point 2a : sub-point 2b
        section 2023 Q2 <br> Release XYZ Tier
          Bullet 3 : sub-point <br> 3a : sub-point 3b
               : sub-point 3c
          Bullet 4 : sub-point 4a : sub-point 4b


## Styling of time periods and events

As explained earlier, each section has a color scheme, and each time period and event under a section follow the similar color scheme.

However, if there is no section defined, then we have two possibilities:

1. Style time periods individually, i.e. each time period(and its corresponding events) will have its own color scheme. This is the DEFAULT behavior.

mermaid-example
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : Youtube
          2006 : Twitter



**NOTE**: that there are no sections defined, and each time period and its corresponding events will have its own color scheme.

2. Disable the multiColor option using the disableMultiColor option. This will make all time periods and events follow the same color scheme.

You will need to add this option either via mermaid.initialize function or directives.

javascript
mermaid.initialize({
        theme: 'base',
        startOnLoad: true,
        logLevel: 0,
        timeline: {
          disableMulticolor: false,
        },
        ...
        ...


let us look at same example, where we have disabled the multiColor option.

mermaid-example
   %%{init: { 'logLevel': 'debug', 'theme': 'base', 'timeline': {'disableMulticolor': true}}}%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : Youtube
          2006 : Twitter



### Customizing Color scheme

You can customize the color scheme using the cScale0 to cScale11 theme variables, which will change the background colors. Mermaid allows you to set unique colors for up-to 12 sections, where cScale0 variable will drive the value of the first section or time-period, cScale1 will drive the value of the second section and so on.
In case you have more than 12 sections, the color scheme will start to repeat.

If you also want to change the foreground color of a section, you can do so use theme variables corresponding cScaleLabel0 to cScaleLabel11 variables.

**NOTE**: Default values for these theme variables are picked from the selected theme. If you want to override the default values, you can use the initialize call to add your custom theme variable values.

Example:

Now let's override the default values for the cScale0 to cScale2 variables:

mermaid-example
    %%{init: { 'logLevel': 'debug', 'theme': 'default' , 'themeVariables': {
              'cScale0': '#ff0000', 'cScaleLabel0': '#ffffff',
              'cScale1': '#00ff00',
              'cScale2': '#0000ff', 'cScaleLabel2': '#ffffff'
       } } }%%
       timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : Youtube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest



See how the colors are changed to the values specified in the theme variables.

## Themes

Mermaid supports a bunch of pre-defined themes which you can use to find the right one for you. PS: you can actually override an existing theme's variable to get your own custom theme going. Learn more about theming your diagram [here](../config/theming.md).

The following are the different pre-defined theme options:

- base
- forest
- dark
- default
- neutral

**NOTE**: To change theme you can either use the initialize call or _directives_. Learn more about [directives](../config/directives.md)
Let's put them to use, and see how our sample diagram looks in different themes:

### Base Theme

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'base' } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : Youtube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest


### Forest Theme

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : Youtube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest


### Dark Theme

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'dark' } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : Youtube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest


### Default Theme

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'default' } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : Youtube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest


### Neutral Theme

mermaid-example
%%{init: { 'logLevel': 'debug', 'theme': 'neutral' } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : Youtube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest


## Integrating with your library/website

Timeline uses experimental lazy loading & async rendering features which could change in the future.The lazy loading is important in order to be able to add additional diagrams going forward.

You can use this method to add mermaid including the timeline diagram to a web page:

html
<script type="module">
  import mermaid from '<CDN_URL>/mermaid@<MERMAID_VERSION>/dist/mermaid.esm.min.mjs';
</script>


You can also refer the implementation in the live editor [here](https://github.com/mermaid-js/mermaid-live-editor/blob/develop/src/lib/util/mermaid.ts) to see how the async loading is done.

# User Journey Diagram

> User journeys describe at a high level of detail exactly what steps different users take to complete a specific task within a system, application or website. This technique shows the current (as-is) user workflow, and reveals areas of improvement for the to-be workflow. (Wikipedia)

Mermaid can render user journey diagrams:

mermaid-example
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me


Each user journey is split into sections, these describe the part of the task
the user is trying to complete.

Tasks syntax is Task name: <score>: <comma separated list of actors>

# XY Chart

> In the context of mermaid-js, the XY chart is a comprehensive charting module that encompasses various types of charts that utilize both x-axis and y-axis for data representation. Presently, it includes two fundamental chart types: the bar chart and the line chart. These charts are designed to visually display and analyze data that involve two numerical variables.

> It's important to note that while the current implementation of mermaid-js includes these two chart types, the framework is designed to be dynamic and adaptable. Therefore, it has the capacity for expansion and the inclusion of additional chart types in the future. This means that users can expect an evolving suite of charting options within the XY chart module, catering to various data visualization needs as new chart types are introduced over time.

## Example

mermaid-example
xychart-beta
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 4000 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]


## Syntax

note
All text values that contain only one word can be written without ". If a text value has many words in it, specifically if it contains spaces, enclose the value in "


### Orientations

The chart can be drawn horizontal or vertical, default value is vertical.


xychart-beta horizontal
...


### Title

The title is a short description of the chart and it will always render on top of the chart.

#### Example


xychart-beta
    title "This is a simple example"
    ...


note
If the title is a single word one no need to use ", but if it has space " is needed


### x-axis

The x-axis primarily serves as a categorical value, although it can also function as a numeric range value when needed.

#### Example

1. x-axis title min --> max x-axis will function as numeric with the given range
2. x-axis "title with space" [cat1, "cat2 with space", cat3] x-axis if categorical, categories are text type

### y-axis

The y-axis is employed to represent numerical range values, it cannot have categorical values.

#### Example

1. y-axis title min --> max
2. y-axis title it will only add the title, the range will be auto generated from data.

note
Both x and y axis are optional if not provided we will try to create the range


### Line chart

A line chart offers the capability to graphically depict lines.

#### Example

1. line [2.3, 45, .98, -3.4] it can have all valid numeric values.

### Bar chart

A bar chart offers the capability to graphically depict bars.

#### Example

1. bar [2.3, 45, .98, -3.4] it can have all valid numeric values.

#### Simplest example

The only two things required are the chart name (xychart-beta) and one data set. So you will be able to draw a chart with a simple config like


xychart-beta
    line [+1.3, .6, 2.4, -.34]


## Chart Configurations

| Parameter                | Description                                    | Default value |
| ------------------------ | ---------------------------------------------- | :-----------: |
| width                    | Width of the chart                             |      700      |
| height                   | Height of the chart                            |      500      |
| titlePadding             | Top and Bottom padding of the title            |      10       |
| titleFontSize            | Title font size                                |      20       |
| showTitle                | Title to be shown or not                       |     true      |
| xAxis                    | xAxis configuration                            |  AxisConfig   |
| yAxis                    | yAxis configuration                            |  AxisConfig   |
| chartOrientation         | 'vertical' or 'horizontal'                     |  'vertical'   |
| plotReservedSpacePercent | Minimum space plots will take inside the chart |      50       |

### AxisConfig

| Parameter     | Description                          | Default value |
| ------------- | ------------------------------------ | :-----------: |
| showLabel     | Show axis labels or tick values      |     true      |
| labelFontSize | Font size of the label to be drawn   |      14       |
| labelPadding  | Top and Bottom padding of the label  |       5       |
| showTitle     | Axis title to be shown or not        |     true      |
| titleFontSize | Axis title font size                 |      16       |
| titlePadding  | Top and Bottom padding of Axis title |       5       |
| showTick      | Tick to be shown or not              |     true      |
| tickLength    | How long the tick will be            |       5       |
| tickWidth     | How width the tick will be           |       2       |
| showAxisLine  | Axis line to be shown or not         |     true      |
| axisLineWidth | Thickness of the axis line           |       2       |

## Chart Theme Variables

note
Themes for xychart resides inside xychart attribute so to set the variables use this syntax
%%{init: { "themeVariables": {"xyChart": {"titleColor": "#ff0000"} } }}%%


| Parameter        | Description                                               |
| ---------------- | --------------------------------------------------------- |
| backgroundColor  | Background color of the whole chart                       |
| titleColor       | Color of the Title text                                   |
| xAxisLabelColor  | Color of the x-axis labels                                |
| xAxisTitleColor  | Color of the x-axis title                                 |
| xAxisTickColor   | Color of the x-axis tick                                  |
| xAxisLineColor   | Color of the x-axis line                                  |
| yAxisLabelColor  | Color of the y-axis labels                                |
| yAxisTitleColor  | Color of the y-axis title                                 |
| yAxisTickColor   | Color of the y-axis tick                                  |
| yAxisLineColor   | Color of the y-axis line                                  |
| plotColorPalette | String of colors separated by comma e.g. "#f3456, #43445" |

## Example on config and theme

mermaid-example
---
config:
    xyChart:
        width: 900
        height: 600
    themeVariables:
        xyChart:
            titleColor: "#ff0000"
---
xychart-beta
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 4000 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]


# Examples

This page contains a collection of examples of diagrams and charts that can be created through mermaid and its myriad applications.

**If you wish to learn how to support mermaid on your webpage, read the [Beginner's Guide](../config/usage.md?id=usage).**

**If you wish to learn about mermaid's syntax, Read the [Diagram Syntax](../syntax/flowchart.md?id=flowcharts-basic-syntax) section.**

## Basic Pie Chart

mermaid-example
pie title NETFLIX
         "Time spent looking for movie" : 90
         "Time spent watching it" : 10


mermaid-example
pie title What Voldemort doesn't have?
         "FRIENDS" : 2
         "FAMILY" : 3
         "NOSE" : 45


## Basic sequence diagram

mermaid-example
sequenceDiagram
    Alice ->> Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Bob-x John: I am good thanks!
    Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?


## Basic flowchart

mermaid-example
graph LR
    A[Square Rect] -- Link text --> B((Circle))
    A --> C(Round Rect)
    B --> D{Rhombus}
    C --> D


## Larger flowchart with some styling

mermaid-example
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A
        od>Odd shape]-- Two line<br/>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --> od3>Really long text with linebreak<br>in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange


## SequenceDiagram: Loops, alt and opt

mermaid-example
sequenceDiagram
    loop Daily query
        Alice->>Bob: Hello Bob, how are you?
        alt is sick
            Bob->>Alice: Not so good :(
        else is well
            Bob->>Alice: Feeling fresh like a daisy
        end

        opt Extra response
            Bob->>Alice: Thanks for asking
        end
    end


## SequenceDiagram: Message to self in loop

mermaid-example
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop HealthCheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts<br/>prevail...
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!


## Sequence Diagram: Blogging app service communication

mermaid-example
sequenceDiagram
    participant web as Web Browser
    participant blog as Blog Service
    participant account as Account Service
    participant mail as Mail Service
    participant db as Storage

    Note over web,db: The user must be logged in to submit blog posts
    web->>+account: Logs in using credentials
    account->>db: Query stored accounts
    db->>account: Respond with query result

    alt Credentials not found
        account->>web: Invalid credentials
    else Credentials found
        account->>-web: Successfully logged in

        Note over web,db: When the user is authenticated, they can now submit new posts
        web->>+blog: Submit new post
        blog->>db: Store post data

        par Notifications
            blog--)mail: Send mail to blog subscribers
            blog--)db: Store in-site notifications
        and Response
            blog-->>-web: Successfully posted
        end
    end



## A commit flow diagram.

mermaid
gitGraph:
    commit "Ashish"
    branch newbranch
    checkout newbranch
    commit id:"1111"
    commit tag:"test"
    checkout main
    commit type: HIGHLIGHT
    commit
    merge newbranch
    commit
    branch b2
    commit


<!--- cspell:ignore Ashish newbranch --->`