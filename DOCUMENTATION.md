# 📔 Royal Thai Cuisine Personality Quiz: Documentation

This document provides a detailed breakdown of the "MBTI Food" website, covering its architecture, scoring logic, and data structures.

## 1. Project Overview
The website is a personality quiz inspired by the MBTI framework that matches users' behavioral traits with traditional Royal Thai dishes. It aims to combine psychological assessment with cultural education regarding Thai culinary wisdom (e.g., balancing flavors, medicinal properties of herbs).

## 2. Technical Stack
- **Frontend Framework**: React 18+ with TypeScript.
- **Styling**: Tailwind CSS (for layout and utility classes) with custom "Royal" theme colors (`royal-gold`, `royal-red`).
- **State Management**: React `useState` for local view management and score tracking.

---

## 3. Core Architecture & Components

The application is structured into three main views managed by a central `App.tsx` component:

### A. View Management (`App.tsx`)
The app uses a `view` state (`'intro' | 'quiz' | 'result'`) to control the user's progress:
- **`Intro.tsx`**: The landing page.
- **`Quiz.tsx`**: Handles the question rendering and real-time scoring.
- **`Result.tsx`**: Processes final scores and displays the matched food personality.

### B. Data Layer
- **`questions.ts`**: Contains an array of 10 structured questions.
- **`foodMapping.ts`**: A dictionary mapping 4-letter personality codes to detailed food results.

---

## 4. Scoring Logic (The "Engine")

The quiz measures personality across **4 Dimensions (Axes)**:

1.  **CIR (Calm vs Intense)**: Measures emotional management and energy.
2.  **RS (Routine vs Spontaneous)**: Measures planning vs. flexibility.
3.  **NE (Nest vs Social)**: Measures social recharging habits (Introversion vs. Extroversion).
4.  **KA (Comfort vs Adventure)**: Measures risk-taking and openness to new experiences.

### The 5-Point Scale
Each question has 5 options (A-E) with a weighted scoring system:
- **A**: Left Side +2
- **B**: Left Side +1
- **C**: Left Side +1 **AND** Right Side +1 (Neutral/Balanced)
- **D**: Right Side +1
- **E**: Right Side +2

### Tie-Breaking Mechanism
If the scores for a dimension are equal (e.g., Calm = 3, Intense = 3), the system looks at the user's answer to **Question 10**. 
- Question 10 is designed as a "Global Tie-Breaker" that influences multiple axes simultaneously based on the user's raw instinct for a day off.

---

## 5. Result Calculation & Mapping

### Step 1: Code Generation
After the 10th question, the system generates a 4-letter string (e.g., `"CRNK"`) based on which side of each axis has more points:
- **C** (Calm) vs **I** (Intense)
- **R** (Routine) vs **S** (Spontaneous)
- **N** (Nest) vs **E** (Social)
- **K** (Comfort) vs **A** (Adventure)

### Step 2: Food Mapping
The code is then mapped to one of the **10 unique food results**. Because there are 16 possible code combinations ($2^4$) but only 10 foods, some foods cover multiple similar personality profiles:

| Personality Code | Matched Food Result |
| :--- | :--- |
| **CRNK** | ข้าวแช่ (Khao Chae) |
| **CRNA / IRNA** | แกงมัสมั่น (Massaman Curry) |
| **CREK / IREK** | หมี่กรอบ (Crispy Noodles) |
| **CREA / IRNA** | ล่าเตียง (La Tiang) |
| **CSNK / ISNK** | ข้าวตังหน้าตั้ง (Rice Crackers) |
| **CSNA / ISNA** | แกงรัญจวน (Kaeng Ranjuan) |
| **CSEK** | น้ำพริกลงเรือ (Nam Phrik Long Ruea) |
| **CSEA / IREA** | ยำทวาย (Yum Tawai) |
| **IRNK** | หรุ่ม (Rum) |
| **ISEK** | ม้าห้อ (Ma Hor) |

---

## 6. Functional Workflow

1.  **User Entry**: User clicks "Start" in `Intro.tsx`.
2.  **Quiz Loop**:
    - `Quiz.tsx` renders one question at a time.
    - When an option is clicked, it updates a local `scores` object.
    - A progress bar tracks completion.
3.  **Finalization**: On the 10th question, `handleComplete` is called in `App.tsx`.
4.  **Result Rendering**:
    - `Result.tsx` calculates the final code.
    - It fetches data from `foodMapping[code]`.
    - It displays:
        - **Food Name & Image**
        - **Personality Description** (How the food matches the person).
        - **Culinary Wisdom**: Taste, Herbs, Ingredients, and Purpose (e.g., "Refreshes the body").
        - **Compatibility**: Which "foods" (people) they get along with or find challenging.

## 7. Design & UI/UX
- **Visual Theme**: A sophisticated "Royal Thai" aesthetic using gold and red gradients.
- **Decorations**: Blurred background spheres create a modern, high-end feel.
- **Responsiveness**: Fully responsive layout that scales from mobile devices to desktop monitors.
- **Interactivity**: Smooth transitions between views and hover states on quiz options.
