export interface ModuleData {
  id: string;
  week: string;
  titleTh: string;
  titleEn: string;
  description: string;
  clo: string;
  hoursT: number;
  hoursP: number;
  topics: string[];
  labTitle: string;
  labCount: number;
  reviewSheet: string;
  icon: string;
  color: string;
}

// 10 หน่วยเรียน ตามเอกสารประกอบการสอน EN-023-012 ฉบับสมบูรณ์ R1 (สัปดาห์ ชั่วโมง ท/ป CLO ตามหัวแผนการจัดการเรียนรู้ หัวข้อ)
export const modules: ModuleData[] = [
  {
    id: "01",
    week: "1",
    titleTh: "หลักการและที่มาของโปรแกรมเมเบิลลอจิกคอนโทรลเลอร์",
    titleEn: "Principles and Background of Programmable Logic Controllers",
    description:
      "ระบบอัตโนมัติในงานวิศวกรรมเครื่องกลประกอบด้วยอุปกรณ์ตรวจจับ ตัวควบคุม และอุปกรณ์ทำงาน ก่อนมีพีแอลซี เครื่องจักรควบคุมด้วยวงจรรีเลย์ซึ่งต้องเดินสายใหม่ทุกครั้งที่เปลี่ยนเงื่อนไข โปรแกรมเมเบิลลอจิกคอนโทรลเลอร์ (Programmable Logic …",
    clo: "CLO1, CLO3, CLO4",
    hoursT: 2,
    hoursP: 2,
    topics: ["1.1 ระบบควบคุมอัตโนมัติในงานวิศวกรรมเครื่องกล", "1.2 ที่มาและวิวัฒนาการของพีแอลซี", "1.3 ความหมาย ข้อดี และข้อจำกัดของพีแอลซี", "1.4 หลักการทำงานของพีแอลซีแบบวงรอบสแกน", "1.5 ชุดฝึก PLC และซอฟต์แวร์ GX Works3"],
    labTitle: "การสำรวจชุดฝึก PLC FX5UJ-24MT/ES การตรวจวัดแหล่งจ่ายไฟ และการเชื่อมต่อ PLC กับซอฟต์แวร์ GX Works3",
    labCount: 1,
    reviewSheet: "review_sheet_01.html",
    icon: "Cpu",
    color: "slate",
  },
  {
    id: "02",
    week: "2",
    titleTh: "ชนิด โครงสร้าง และส่วนประกอบของพีแอลซี",
    titleEn: "Types, Structures and Components of PLCs",
    description:
      "PLC จำแนกตามโครงสร้างได้เป็นแบบคอมแพกต์ (Compact) ซึ่งรวม CPU แหล่งจ่ายไฟ และอินพุต/เอาต์พุตไว้ในตัวเดียว และแบบโมดูลาร์ (Modular) ซึ่งประกอบโมดูลแยกบนแร็กหรือเบส ส่วนประกอบหลักของ PLC ได้แก่ แหล่งจ่ายไฟ หน่วยประมวลผลกลาง …",
    clo: "CLO1, CLO3, CLO4",
    hoursT: 2,
    hoursP: 2,
    topics: ["2.1 ชนิดของพีแอลซี", "2.2 ส่วนประกอบหลักของพีแอลซี", "2.3 พีแอลซี Mitsubishi FX5UJ-24MT/ES", "2.4 วงจรอินพุตของพีแอลซี", "2.5 วงจรเอาต์พุตของพีแอลซี", "2.6 การต่อวงจรอินพุต/เอาต์พุตของชุดฝึก"],
    labTitle: "การเขียนโปรแกรมรับสัญญาณอินพุตและสั่งงานเอาต์พุต (INPUT-OUTPUT แบบที่ 1–3) ด้วยหน้าสัมผัส NO, NC และเอาต์พุตขนาน",
    labCount: 1,
    reviewSheet: "review_sheet_02.html",
    icon: "Boxes",
    color: "blue",
  },
  {
    id: "03",
    week: "3–4",
    titleTh: "ภาษาโปรแกรมและคำสั่งพื้นฐานของพีแอลซี",
    titleEn: "PLC Programming Languages and Basic Instructions",
    description:
      "มาตรฐาน IEC 61131-3 กำหนดภาษาโปรแกรม PLC 5 ภาษา ได้แก่ Ladder Diagram (LD), Function Block Diagram (FBD), Structured Text (ST), Instruction List (IL) และ Sequential Function Chart (SFC) ภาษา Ladder …",
    clo: "CLO1, CLO2, CLO3",
    hoursT: 4,
    hoursP: 4,
    topics: ["3.1 ภาษาโปรแกรมของพีแอลซีตามมาตรฐาน IEC 61131-3", "3.2 โครงสร้างและสัญลักษณ์ของภาษาแลดเดอร์", "3.3 ตรรกะพื้นฐานและการแปลงเป็นโปรแกรมแลดเดอร์", "3.4 คำสั่งพื้นฐานของพีแอลซี Mitsubishi", "3.5 วงจรอินเตอร์ล็อก", "3.6 วงจรคงสถานะ"],
    labTitle: "การเขียนโปรแกรมวงจรอินเตอร์ล็อกด้านอินพุต (Input Interlock) และด้านเอาต์พุต (Output Interlock) / การเขียนโปรแกรมวงจรคงสถานะ (Self-holding) แบบหยุดมีความสำคัญกว่าและแบบเริ่มมีความสำคัญกว่า",
    labCount: 2,
    reviewSheet: "review_sheet_03.html",
    icon: "Code",
    color: "green",
  },
  {
    id: "04",
    week: "5–6",
    titleTh: "รีเลย์ภายใน รีเลย์พิเศษ และคำสั่ง SET/RST",
    titleEn: "Internal Relays, Special Relays and SET/RST Instructions",
    description:
      "นอกจากอินพุต X และเอาต์พุต Y แล้ว PLC มีอุปกรณ์บิตภายในหน่วยความจำสำหรับใช้ในโปรแกรม ได้แก่ รีเลย์ภายใน (M) ซึ่งใช้เก็บสถานะกลางของโปรแกรม รีเลย์คงค่า (L) ซึ่งจำสถานะไว้แม้ไฟฟ้าดับ และรีเลย์พิเศษ (SM) ซึ่งระบบกำหนดหน้าที่ไว้แล้ว …",
    clo: "CLO1, CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["4.1 อุปกรณ์บิตภายในหน่วยความจำของพีแอลซี", "4.2 รีเลย์พิเศษ (Special relay: SM)", "4.3 คำสั่ง SET, RST และ ZRST", "4.4 คำสั่งตรวจจับขอบสัญญาณ PLS และ PLF", "4.5 การออกแบบวงจรแจ้งเตือนและหยุดฉุกเฉิน"],
    labTitle: "การใช้รีเลย์ภายใน (Internal Relay: M) เป็นตัวกลางในการเขียนโปรแกรมควบคุมและโหมดการทำงาน / การเขียนโปรแกรมแจ้งเตือนเหตุฉุกเฉินด้วยรีเลย์พิเศษ (SM412) และการควบคุมด้วยคำสั่ง SET/RST",
    labCount: 2,
    reviewSheet: "review_sheet_04.html",
    icon: "ToggleLeft",
    color: "yellow",
  },
  {
    id: "05",
    week: "7",
    titleTh: "ไทเมอร์และการควบคุมด้วยเวลา",
    titleEn: "Timers and Time-based Control",
    description:
      "งานควบคุมเครื่องจักรจำนวนมากต้องการการหน่วงเวลา เช่น รอให้กระบอกสูบจับชิ้นงานแน่นก่อนเคลื่อนที่ เปิดปั๊มน้ำมันหล่อลื่นก่อนสตาร์ทเครื่อง หรือให้สัญญาณเตือนกะพริบ ไทเมอร์ของ PLC …",
    clo: "CLO1, CLO2, CLO3, CLO4",
    hoursT: 2,
    hoursP: 2,
    topics: ["5.1 หลักการทำงานของไทเมอร์", "5.2 ชนิดของไทเมอร์ตามพฤติกรรม", "5.3 วงจรไทเมอร์ประยุกต์", "5.4 การเขียนผังเวลาและการตรวจสอบโปรแกรมไทเมอร์"],
    labTitle: "การใช้ไทเมอร์ (Timer) หน่วงเวลาทำงาน และการใช้ไทเมอร์ร่วมกับวงจรคงสถานะ",
    labCount: 1,
    reviewSheet: "review_sheet_05.html",
    icon: "Timer",
    color: "red",
  },
  {
    id: "06",
    week: "9",
    titleTh: "เคาน์เตอร์ รีจิสเตอร์ข้อมูล และคำสั่งเปรียบเทียบ",
    titleEn: "Counters, Data Registers and Comparison Instructions",
    description:
      "เคาน์เตอร์ของ PLC ใช้นับจำนวนเหตุการณ์ เช่น จำนวนชิ้นงานที่ผ่านเซนเซอร์ จำนวนรอบการทำงานของเครื่องจักร หรือจำนวนครั้งที่กดปุ่ม เคาน์เตอร์นับหนึ่งครั้งเมื่อเงื่อนไขเปลี่ยนจาก OFF เป็น ON (ขอบขาขึ้น) เมื่อค่าปัจจุบันถึงค่าตั้ง …",
    clo: "CLO1, CLO2, CLO3, CLO4",
    hoursT: 2,
    hoursP: 2,
    topics: ["6.1 หลักการทำงานของเคาน์เตอร์", "6.2 รีจิสเตอร์ข้อมูลและคำสั่งจัดการข้อมูล", "6.3 การประยุกต์เคาน์เตอร์ร่วมกับไทเมอร์"],
    labTitle: "การใช้เคาน์เตอร์ (Counter) นับจำนวนครั้งและการรีเซ็ตค่า ร่วมกับไทเมอร์ในงานนับชิ้นงาน",
    labCount: 1,
    reviewSheet: "review_sheet_06.html",
    icon: "Hash",
    color: "purple",
  },
  {
    id: "07",
    week: "10–11",
    titleTh: "การเชื่อมต่อพีแอลซีกับเซนเซอร์อุตสาหกรรม",
    titleEn: "Connecting PLCs to Industrial Sensors",
    description:
      "เซนเซอร์เป็นอุปกรณ์อินพุตที่ทำให้ PLC รับรู้สถานะของเครื่องจักร เซนเซอร์แบบดิจิทัลที่ใช้มากในงานวิศวกรรมเครื่องกล ได้แก่ ลิมิตสวิตช์ซึ่งต้องสัมผัสชิ้นงาน พร็อกซิมิตีเซนเซอร์แบบเหนี่ยวนำซึ่งตรวจจับโลหะ …",
    clo: "CLO1, CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["7.1 เซนเซอร์ในระบบควบคุมเครื่องจักร", "7.2 พร็อกซิมิตีเซนเซอร์", "7.3 โฟโตอิเล็กทริกเซนเซอร์และรีดสวิตช์", "7.4 การต่อเซนเซอร์เข้ากับพีแอลซี", "7.5 การเลือกเซนเซอร์และการประยุกต์ในโปรแกรม"],
    labTitle: "การต่อพร็อกซิมิตีเซนเซอร์แบบเหนี่ยวนำชนิด NPN 3 สายเข้ากับ PLC และการเขียนโปรแกรมตรวจจับวัตถุโลหะ / การต่อโฟโตอิเล็กทริกเซนเซอร์แบบสะท้อนจากวัตถุเข้ากับ PLC การปรับระยะตรวจจับ และการเขียนโปรแกรมตรวจจับวัตถุ",
    labCount: 2,
    reviewSheet: "review_sheet_07.html",
    icon: "Radar",
    color: "teal",
  },
  {
    id: "08",
    week: "12–13",
    titleTh: "การควบคุมมอเตอร์และอุปกรณ์ทำงานด้วยพีแอลซี",
    titleEn: "Controlling Motors and Actuators with PLCs",
    description:
      "อุปกรณ์ทำงาน (Actuator) เปลี่ยนคำสั่งของ PLC เป็นการเคลื่อนที่หรือการกระทำทางกายภาพ เช่น มอเตอร์ไฟฟ้ากระแสตรงและกระแสสลับ โซลินอยด์วาล์ว และฮีตเตอร์ เนื่องจากเอาต์พุตของ PLC จ่ายกระแสได้จำกัด …",
    clo: "CLO1, CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["8.1 อุปกรณ์ทำงานในระบบควบคุมเครื่องจักร", "8.2 รีเลย์และคอนแทคเตอร์", "8.3 การควบคุมมอเตอร์ไฟฟ้ากระแสตรง", "8.4 การควบคุมมอเตอร์เหนี่ยวนำสามเฟส", "8.5 โซลินอยด์วาล์วและการบูรณาการเซนเซอร์กับอุปกรณ์ทำงาน"],
    labTitle: "การควบคุมทิศทางการหมุนของมอเตอร์ไฟฟ้ากระแสตรงผ่านรีเลย์ด้วยสวิตช์ทางเลือกและอินเตอร์ล็อก / การบูรณาการพร็อกซิมิตีเซนเซอร์และโฟโตอิเล็กทริกเซนเซอร์ควบคุมทิศทางมอเตอร์ไฟฟ้ากระแสตรงแบบคงสถานะ",
    labCount: 2,
    reviewSheet: "review_sheet_08.html",
    icon: "Fan",
    color: "indigo",
  },
  {
    id: "09",
    week: "14",
    titleTh: "การควบคุมตำแหน่งด้วยสเต็ปปิงมอเตอร์และเอาต์พุตพัลส์ของพีแอลซี",
    titleEn: "Position Control with Stepping Motors and PLC Pulse Outputs",
    description:
      "งานเครื่องจักรกลจำนวนมากต้องการเคลื่อนที่ไปยังตำแหน่งที่กำหนดอย่างแม่นยำ เช่น โต๊ะงานเคลื่อนที่ เครื่องป้อนวัสดุ และแกนหมุนจัดตำแหน่ง สเต็ปปิงมอเตอร์หมุนเป็นมุมคงที่ต่อหนึ่งพัลส์ จึงควบคุมตำแหน่งแบบวงเปิดได้ด้วยการนับจำนวนพัลส์ …",
    clo: "CLO1, CLO2, CLO3, CLO4",
    hoursT: 2,
    hoursP: 2,
    topics: ["9.1 การควบคุมตำแหน่งในงานเครื่องจักรกล", "9.2 สเต็ปปิงมอเตอร์และไมโครสเต็ปไดรเวอร์", "9.3 การตั้งค่าและคำสั่งกำหนดตำแหน่งของ FX5UJ", "9.4 การเขียนโปรแกรมควบคุมตำแหน่ง"],
    labTitle: "การควบคุมความเร็วและตำแหน่งของสเต็ปปิงมอเตอร์ด้วยเอาต์พุตพัลส์ของ PLC (DPLSV, DDSZR, DDRVI และ DDRVA)",
    labCount: 1,
    reviewSheet: "review_sheet_09.html",
    icon: "Crosshair",
    color: "orange",
  },
  {
    id: "10",
    week: "15–16",
    titleTh: "การออกแบบระบบควบคุมนิวแมติกส์และการควบคุมแบบลำดับด้วยพีแอลซี",
    titleEn: "Electro-Pneumatic System Design and Sequence Control with PLCs",
    description:
      "ระบบนิวแมติกส์ไฟฟ้า (Electro-pneumatics) ใช้ลมอัดเป็นต้นกำลังขับกระบอกสูบและหัวดูดสุญญากาศ และใช้ PLC สั่งโซลินอยด์วาล์วตามสัญญาณจากรีดสวิตช์ที่บอกตำแหน่งลูกสูบ จึงเป็นระบบที่พบมากที่สุดในเครื่องจักรอัตโนมัติขนาดเล็กและสายการผลิต …",
    clo: "CLO1, CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["10.1 ระบบนิวแมติกส์ไฟฟ้าในเครื่องจักรอัตโนมัติ", "10.2 อุปกรณ์ในระบบนิวแมติกส์ไฟฟ้า", "10.3 การวิเคราะห์ลำดับงานและการเขียนแผนภาพ", "10.4 การเขียนโปรแกรมควบคุมแบบลำดับด้วยรีเลย์ขั้น", "10.5 กระบวนการออกแบบระบบควบคุมด้วย PLC"],
    labTitle: "การควบคุมกระบอกสูบนิวแมติกส์แบบ MANUAL ผ่าน PLC ด้วยสวิตช์ทางเลือก พร้อมอินเตอร์ล็อกตำแหน่ง / การออกแบบโปรแกรมควบคุมแบบลำดับ (Sequence Control) ด้วยรีเลย์ขั้นสำหรับกระบอกสูบนิวแมติกส์แบบ AUTO (Pick and Place)",
    labCount: 2,
    reviewSheet: "review_sheet_10.html",
    icon: "Wind",
    color: "rose",
  },
];

export function getModuleById(id: string): ModuleData | undefined {
  return modules.find((m) => m.id === id);
}

export const colorMap: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  slate: { bg: "bg-slate-100 dark:bg-slate-800/40", text: "text-slate-700 dark:text-slate-300", border: "border-slate-200 dark:border-slate-700", accent: "from-slate-500 to-gray-500" },
  blue: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", accent: "from-blue-500 to-cyan-500" },
  green: { bg: "bg-green-50 dark:bg-green-900/20", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800", accent: "from-green-500 to-emerald-500" },
  yellow: { bg: "bg-yellow-50 dark:bg-yellow-900/20", text: "text-yellow-700 dark:text-yellow-300", border: "border-yellow-200 dark:border-yellow-800", accent: "from-yellow-500 to-orange-500" },
  red: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-700 dark:text-red-300", border: "border-red-200 dark:border-red-800", accent: "from-red-500 to-pink-500" },
  purple: { bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800", accent: "from-purple-500 to-violet-500" },
  teal: { bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", accent: "from-teal-500 to-cyan-500" },
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-900/20", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800", accent: "from-indigo-500 to-blue-500" },
  orange: { bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800", accent: "from-orange-500 to-amber-500" },
  rose: { bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", accent: "from-rose-500 to-pink-500" },
};
