export interface Question {
  id: number;
  text: string;
  dimension: 'CIR' | 'RS' | 'NE' | 'KA' | 'ALL'; // Dimensions mapping to the 4 axes
  options: {
    text: string;
    value: {
      left: number; // A=2, B=1, C=1
      right: number; // C=1, D=1, E=2
    };
  }[];
}

// Axis mapping for scoring:
// 1. C vs I (Calm vs Intense) - Q1, Q6, Q9
// 2. R vs S (Routine vs Spontaneous) - Q2, Q7, Q10
// 3. N vs E (Nest vs Social) - Q3, Q8, Q10
// 4. K vs A (Comfort vs Adventure) - Q4, Q5, Q10

export const questions: Question[] = [
  {
    id: 1,
    text: "เวลาเครียด คุณมัก “จัดการอารมณ์” แบบไหน?",
    dimension: 'CIR',
    options: [
      { text: "นิ่งก่อน ค่อยคลี่ทีละจุด", value: { left: 2, right: 0 } },
      { text: "ถอยออกมาสงบ แล้วค่อยกลับไปแก้", value: { left: 1, right: 0 } },
      { text: "แล้วแต่เรื่อง บางทีนิ่งบางทีปะทุ", value: { left: 1, right: 1 } },
      { text: "ต้องได้ทำอะไรสักอย่าง ระบายแล้วค่อยคิด", value: { left: 0, right: 1 } },
      { text: "ลุยแก้ทันที ยิ่งกดดันยิ่งเร่งเครื่อง", value: { left: 0, right: 2 } }
    ]
  },
  {
    id: 2,
    text: "คุณชอบทำงาน/อ่านหนังสือสไตล์ไหน?",
    dimension: 'RS',
    options: [
      { text: "มีแผน/เช็กลิสต์ชัด", value: { left: 2, right: 0 } },
      { text: "มีโครงคร่าวๆ แล้วค่อยเติม", value: { left: 1, right: 0 } },
      { text: "ผสมกัน แล้วแต่อารมณ์/งาน", value: { left: 1, right: 1 } },
      { text: "ทำตามแรงบันดาลใจ เดี๋ยวค่อยจัดระเบียบ", value: { left: 0, right: 1 } },
      { text: "ด้นสดเก่ง เดดไลน์ช่วยดึงพลัง", value: { left: 0, right: 2 } }
    ]
  },
  {
    id: 3,
    text: "หลังเจอคนเยอะๆ คุณรีชาร์จยังไง?",
    dimension: 'NE',
    options: [
      { text: "อยู่เงียบๆ คนเดียวถึงจะกลับมาเต็ม", value: { left: 2, right: 0 } },
      { text: "อยู่กับคนสนิทไม่กี่คน", value: { left: 1, right: 0 } },
      { text: "ได้หมด ขึ้นกับวันนั้น", value: { left: 1, right: 1 } },
      { text: "อยากทำกิจกรรมต่อกับเพื่อน", value: { left: 0, right: 1 } },
      { text: "ยิ่งคนเยอะยิ่งคึก เหมือนได้ชาร์จแบต", value: { left: 0, right: 2 } }
    ]
  },
  {
    id: 4,
    text: "เวลาเลือก “ประสบการณ์ใหม่” คุณเป็นแบบไหน?",
    dimension: 'KA',
    options: [
      { text: "ขอสิ่งที่คุ้นเคยและไว้ใจได้", value: { left: 2, right: 0 } },
      { text: "ลองใหม่ได้ แต่ต้องมีข้อมูลรองรับ", value: { left: 1, right: 0 } },
      { text: "แล้วแต่ช่วงชีวิต", value: { left: 1, right: 1 } },
      { text: "สนใจของใหม่ที่แตกต่าง", value: { left: 0, right: 1 } },
      { text: "ยิ่งใหม่/ยิ่งท้าทายยิ่งอยากลอง", value: { left: 0, right: 2 } }
    ]
  },
  {
    id: 5,
    text: "เวลาเกิดความขัดแย้ง คุณให้ค่ากับอะไรที่สุด?",
    dimension: 'KA',
    options: [
      { text: "ความมั่นคงของความสัมพันธ์มาก่อน", value: { left: 2, right: 0 } },
      { text: "คุยให้จบดีๆ แบบนุ่มนวล", value: { left: 1, right: 0 } },
      { text: "แล้วแต่คนและสถานการณ์", value: { left: 1, right: 1 } },
      { text: "ขอความชัด ถึงจะตึงก็ยอม", value: { left: 0, right: 1 } },
      { text: "ถ้าไม่แฟร์ก็พร้อม “เปลี่ยนกติกา” ใหม่", value: { left: 0, right: 2 } }
    ]
  },
  {
    id: 6,
    text: "คนอื่นรับรู้ “พลังคุณ” แบบไหน?",
    dimension: 'CIR',
    options: [
      { text: "อยู่ใกล้แล้วรู้สึกสงบ", value: { left: 2, right: 0 } },
      { text: "สุขุม พลังเงียบ", value: { left: 1, right: 0 } },
      { text: "กลางๆ เดายาก", value: { left: 1, right: 1 } },
      { text: "ชัดเจน มีไฟ", value: { left: 0, right: 1 } },
      { text: "มาแล้วคนรู้เลยว่าพลังเต็ม", value: { left: 0, right: 2 } }
    ]
  },
  {
    id: 7,
    text: "เวลาตัดสินใจเรื่องสำคัญ คุณพึ่งอะไร?",
    dimension: 'RS',
    options: [
      { text: "ข้อมูล + แผน + ความเสี่ยงที่คุมได้", value: { left: 2, right: 0 } },
      { text: "คิดรอบคอบและเตรียมทางเลือก", value: { left: 1, right: 0 } },
      { text: "เหตุผลผสมเซนส์", value: { left: 1, right: 1 } },
      { text: "เซนส์นำ แผนตาม", value: { left: 0, right: 1 } },
      { text: "เอาตัวรอดตามสถานการณ์เก่งที่สุด", value: { left: 0, right: 2 } }
    ]
  },
  {
    id: 8,
    text: "ตอนดีใจ/เสียใจ คุณเลือก “แชร์” แค่ไหน?",
    dimension: 'NE',
    options: [
      { text: "เก็บไว้กับตัวเองก่อน", value: { left: 2, right: 0 } },
      { text: "แชร์กับคนที่ไว้ใจไม่กี่คน", value: { left: 1, right: 0 } },
      { text: "แล้วแต่อารมณ์", value: { left: 1, right: 1 } },
      { text: "อยากเล่าให้เพื่อนฟังเร็วๆ", value: { left: 0, right: 1 } },
      { text: "ยิ่งมีคนร่วมอารมณ์ยิ่งดี", value: { left: 0, right: 2 } }
    ]
  },
  {
    id: 9,
    text: "สภาพแวดล้อมแบบไหนทำให้คุณโฟกัส?",
    dimension: 'CIR',
    options: [
      { text: "เงียบ เรียบร้อย เป็นระบบ", value: { left: 2, right: 0 } },
      { text: "มีเสียงเบาๆ พอให้ไม่ว่างเกินไป", value: { left: 1, right: 0 } },
      { text: "ขอแค่งานสำคัญพอ ก็โฟกัสได้", value: { left: 1, right: 1 } },
      { text: "คึกคักนิดๆ จะมีไฟ", value: { left: 0, right: 1 } },
      { text: "ยิ่งวุ่นยิ่งตื่น ยิ่งท้าทายยิ่งสนุก", value: { left: 0, right: 2 } }
    ]
  },
  {
    id: 10,
    text: "(Tie-break) ได้วันว่าง 1 วัน คุณจะใช้แบบไหน “ตามสัญชาตญาณ”?",
    dimension: 'ALL',
    options: [
      { text: "วางแผนชัด อยู่เงียบๆ ทำสิ่งเดิมที่สบายใจ", value: { left: 2, right: 0 } },
      { text: "แพลนคร่าวๆ อยู่กับคนสนิท ทำของคุ้นเคยแต่เพิ่มลูกเล่น", value: { left: 1, right: 0 } },
      { text: "สลับทั้งพัก/เจอคน ทั้งเดิม/ใหม่", value: { left: 1, right: 1 } },
      { text: "ไม่ค่อยวางแผน ออกไปเจอคน หาอะไรใหม่ๆ ทำ", value: { left: 0, right: 1 } },
      { text: "ตื่นแล้วออกเลย ชวนคนไปลุยของใหม่แบบจัดเต็ม", value: { left: 0, right: 2 } }
    ]
  }
];
