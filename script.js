function calculate() {
  const powerHP = parseFloat(document.getElementById("power").value);
  const efficiency = parseFloat(document.getElementById("efficiency").value);
  const widthMM = parseFloat(document.getElementById("width").value);
  const speedMMin = parseFloat(document.getElementById("speed").value);
  const yieldMPa = parseFloat(document.getElementById("yield").value);

  if (isNaN(powerHP) || isNaN(efficiency) || isNaN(widthMM) || isNaN(speedMMin) || isNaN(yieldMPa)) {
    document.getElementById("result").innerText = "من فضلك أدخل كل القيم بشكل صحيح.";
    return;
  }

  const P = powerHP * 745.7; // تحويل الحصان إلى واط
  const v = speedMMin / 60;  // تحويل متر/دقيقة إلى متر/ثانية
  const b = widthMM / 1000;  // تحويل مم إلى متر
  const sigma = yieldMPa * 1e6;

  const t = (P * efficiency) / (sigma * b * v);  // الناتج بالمتر
  const tMM = t * 1000;

  document.getElementById("result").innerText = `أقصى سمك للشريحة = ${tMM.toFixed(2)} مم`;
}
