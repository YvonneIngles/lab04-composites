// You need to create two classes that implement this interface: DomElement, and TextNode.
/**
 * Most of the elements in your DOM will be DomElements
 * because they will have child DomElements of their own.
 * The difference between a DomElement and a TextNode is
 * that a TextNode has no child DomElements (it is a leaf in the DOM tree).

Each instance of this DomElement class will represent a elements
(you can also call them nodes) in your DOM tree (e.g. an html tag, or div tag, or p tag, etc...)
 */
var DomElement = (function () {
    function DomElement() {
    }
    return DomElement;
}());
var TextNode = (function () {
    function TextNode() {
    }
    return TextNode;
}());
//document.documentElement
