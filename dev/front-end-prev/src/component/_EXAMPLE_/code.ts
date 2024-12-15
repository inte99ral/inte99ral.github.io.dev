// # src/component/_EXAMPLE_/code.ts

// ## Documentation ==========================================================
/**
 * @author inte99ral
 * @version 2024-11-18
 */

// ## Import Declaration =====================================================

// ### API & Library:

import {} from './index';

// ### Component:

import {} from './component/';

// ### Style:

import {} from './style';

// ### Asset:

import img from './asset/image/error.png';

// ## Interface & Class ======================================================

// ### ExampleType
/**
 * 『JS_DOC』
 */
export interface ExampleType {
  id: number;
  name: string;
}

// ### ExampleClass
/**
 * 『JS_DOC』
 */
class ExampleClass {
  // #### Private:
  // ##### Private > Field
  private static instance: ExampleClass;
  private hideNumber: number;

  // ##### Private > Method
  private constructor() {
    this.hideNumber = 0;
    this.openNumber = 1;
    this.memberFunction = this.memberFunction.bind(this); // this 바인딩
  }

  // #### Public:
  // ##### Public > Field
  public openNumber: number;

  // ##### Public > Method
  public memberFunction = () => {};
}

// ## Variable & Constant ====================================================
const exampleCst = 0;
let exampleVar = 1;

// ## Function ===============================================================

// ### exampleFunction
/**
 * @author inte99ral
 * @version 2024-11-18
 * @returns
 */
const exampleFunction = (): ExampleType[] => {
  // #### Variable:
  let foo = 0;

  // #### Function:
  (() => foo++)();

  // #### Return:
  return [];
};
