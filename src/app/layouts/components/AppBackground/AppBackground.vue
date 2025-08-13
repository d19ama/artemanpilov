<script lang="ts" setup>
import {
  onMounted,
  ref,
} from 'vue';

interface Coordinates {
  xCoordinate: number;
  yCoordinate: number;
}

type Callback = (ctx: CanvasRenderingContext2D) => void;

const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  drawer(drawRoom);
});

function drawer(callback: Callback): void {
  if (!canvasRef.value) {
    return;
  }

  const ctx: CanvasRenderingContext2D | null = canvasRef.value.getContext('2d');

  if (ctx === null) {
    return;
  }

  ctx.imageSmoothingQuality = 'high';
  ctx.imageSmoothingEnabled = true;
  ctx.strokeStyle = '#e6e6e6';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineDashOffset = 20;

  // ctx.clearRect(
  //   0,
  //   0,
  //   canvasRef.value.width,
  //   canvasRef.value.height,
  // );

  callback(ctx);

  ctx.drawImage(
    canvasRef.value,
    0,
    0,
    canvasRef.value.width,
    canvasRef.value.height,
  );

  requestAnimationFrame(() => drawer(callback));
}

function drawLine(
  ctx: CanvasRenderingContext2D,
  moveTo: Coordinates,
  lineTo: Coordinates,
): void {
  ctx.beginPath();
  ctx.moveTo(moveTo.xCoordinate, moveTo.yCoordinate);
  ctx.lineTo(lineTo.xCoordinate, lineTo.yCoordinate);
  ctx.closePath();
  ctx.stroke();
}

// function drawCross(ctx: CanvasRenderingContext2D): void {
//   const xCoordinate: number = ctx.canvas.width;
//   const yCoordinate: number = ctx.canvas.height;
//
//   drawLine(
//     ctx,
//     {
//       xCoordinate: ctx.canvas.width / 2,
//       yCoordinate: 0,
//     },
//     {
//       xCoordinate: ctx.canvas.width / 2,
//       yCoordinate,
//     },
//   );
//
//   drawLine(
//     ctx,
//     {
//       xCoordinate: 0,
//       yCoordinate: ctx.canvas.height / 2,
//     },
//     {
//       xCoordinate: ctx.canvas.width,
//       yCoordinate: ctx.canvas.height / 2,
//     },
//   );
// }

function drawRoom(ctx: CanvasRenderingContext2D): void {
  const width: number = ctx.canvas.width / 2;
  const height: number = ctx.canvas.height / 2;
  const xCoordinate: number = width / 2;
  const yCoordinate: number = height / 2;

  ctx.strokeRect(
    xCoordinate,
    yCoordinate,
    width,
    height,
  );

  drawLine(
    ctx,
    {
      xCoordinate: 0,
      yCoordinate: 0,
    },
    {
      xCoordinate,
      yCoordinate,
    },
  );

  drawLine(
    ctx,
    {
      xCoordinate: ctx.canvas.width,
      yCoordinate: 0,
    },
    {
      xCoordinate: xCoordinate * 3,
      yCoordinate,
    },
  );

  drawLine(
    ctx,
    {
      xCoordinate: 0,
      yCoordinate: ctx.canvas.height,
    },
    {
      xCoordinate,
      yCoordinate: xCoordinate * 3,
    },
  );

  drawLine(
    ctx,
    {
      xCoordinate: ctx.canvas.width,
      yCoordinate: ctx.canvas.height,
    },
    {
      xCoordinate: yCoordinate * 3,
      yCoordinate: xCoordinate * 3,
    },
  );
}
</script>

<template>
  <canvas
    ref="canvasRef"
    class="app-background"
    width="2000"
    height="2000"
  />
</template>

<style lang="scss">
.app-background {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
