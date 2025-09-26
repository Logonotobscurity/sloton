// fizzy-ui-utils v3.0.0
// public domain
// ====================

type EventLike = {
  type: string;
};

type Listener = {
  [key: string]: (event: Event) => void;
};

const utils = {
  // Make array from object
  makeArray<T>(obj: T | T[]): T[] {
    if (Array.isArray(obj)) {
      return obj;
    }
    if (obj === null || obj === undefined) {
      return [];
    }
    // Check if it's array-like
    if (typeof obj === 'object' && typeof (obj as any).length === 'number') {
        return [...(obj as any)];
    }
    return [obj];
  },

  // num [modulo] div
  modulo(num: number, div: number): number {
    return ((num % div) + div) % div;
  },

  // Remove object from array
  removeFrom<T>(ary: T[], obj: T): void {
    const index = ary.indexOf(obj);
    if (index !== -1) {
      ary.splice(index, 1);
    }
  },

  // If elem is a string, use it as a selector and return element
  getQueryElement(elem: string | Element): Element | null {
    if (typeof elem === 'string') {
      return document.querySelector(elem);
    }
    return elem;
  },

  // Enable MyClass.onclick when element.addEventListener('click', this, false)
  handleEvent(event: Event): void {
    const method = 'on' + (event as EventLike).type;
    if (typeof (this as Listener)[method] === 'function') {
      (this as Listener)[method](event);
    }
  },
  
  // Iterate through elems, filter and find all elements that match selector
  filterFindElements(elems: NodeListOf<Element>, selector: string): Element[] {
    const anArray = utils.makeArray(elems);
    const ffElems: Element[] = [];

    anArray.forEach(function(elem) {
      // check if elem is an element
      if (!(elem instanceof Element)) {
        return;
      }
      // filter & find nodes
      if (selector) {
        // filter
        if (elem.matches(selector)) {
          ffElems.push(elem);
        }
        // find
        const matches = elem.querySelectorAll(selector);
        ffElems.push(...Array.from(matches));
      } else {
        ffElems.push(elem);
      }
    });

    return ffElems;
  },

  // Debounce a class method
  debounceMethod<T extends object>(MyClass: new (...args: any[]) => T, methodName: keyof T, threshold: number): void {
    const originalMethod = MyClass.prototype[methodName] as Function;
    const timeoutName = `_${String(methodName)}Timeout`;

    (MyClass.prototype as any)[methodName] = function(...args: any[]) {
      const timeout = (this as any)[timeoutName];
      if (timeout) {
        clearTimeout(timeout);
      }
      const _this = this;
      (this as any)[timeoutName] = setTimeout(function() {
        originalMethod.apply(_this, args);
        delete (_this as any)[timeoutName];
      }, threshold || 100);
    };
  },

  // Trigger callback on document ready
  docReady(callback: () => void): void {
    const readyState = document.readyState;
    if (readyState === 'complete' || readyState === 'interactive') {
      // DOM is already ready, call callback
      setTimeout(callback);
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  },

  // 'camelCaseString' -> 'camel-case-string'
  toDashed(str: string): string {
    return str.replace(/([A-Z])/g, function(match) {
      return '-' + match.toLowerCase();
    });
  },

  // On document ready, initialize MyClass on every element that matches [data-namespace] attribute
  htmlInit<T>(MyClass: new (element: Element, options: any) => T, namespace: string): void {
    utils.docReady(function() {
      const dashedNamespace = utils.toDashed(namespace);
      const dataAttr = 'data-' + dashedNamespace;
      const query = '[' + dataAttr + ']';

      const elems = document.querySelectorAll(query);
      const anElems = utils.makeArray(elems) as HTMLElement[];
      const instances: T[] = [];

      anElems.forEach(function(elem) {
        const attr = elem.getAttribute(dataAttr);
        let options;
        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          console.error(`Error parsing ${dataAttr} on ${elem.className}: ${error}`);
          return;
        }
        // initialize
        const instance = new MyClass(elem, options);
        instances.push(instance);
      });
    });
  },

  // DEPRECATED - use Object.assign or { ...a, ...b } instead
  extend<A, B>(a: A, b: B): A & B {
    for (const prop in b) {
      (a as any)[prop] = (b as any)[prop];
    }
    return a as A & B;
  },
  
  // DEPRECATED - use elem.closest(selector) instead
  getParent(elem: Element, selector: string): Element | null {
    let parent = elem.parentElement;
    while (parent && parent !== document.body) {
      if (parent.matches(selector)) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
};

export default utils;
