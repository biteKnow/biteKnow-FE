const fs = require('fs');
const path = require('path');

// 예시 상식들 (랜덤하게 1개씩 뽑아 사용)
const candidates = [
  {
    title: "벌들은 사람 얼굴을 구분할 수 있다",
    content: "연구에 따르면 벌은 복잡한 이미지를 인식해 사람 얼굴을 구별할 수 있다."
  },
  {
    title: "펭귄은 무릎이 있다",
    content: "펭귄은 걷는 방식 때문에 무릎이 없는 것처럼 보이지만 실제로는 무릎관절을 가지고 있다."
  },
  {
    title: "달은 매년 지구에서 멀어지고 있다",
    content: "달은 매년 약 3.8cm씩 지구에서 멀어지고 있다."
  }
];

const today = new Date().toISOString().split('T')[0];
const newFact = {
  date: today,
  ...candidates[Math.floor(Math.random() * candidates.length)]
};

const filePath = path.join(__dirname, '../facts/facts.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// 중복 방지
if (!data.find(f => f.date === today)) {
  data.push(newFact);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log("✅ 새 상식 추가됨:", newFact.title);
} else {
  console.log("⚠️ 이미 오늘 상식이 존재함, 추가하지 않음.");
}
