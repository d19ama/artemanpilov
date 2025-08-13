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
  // drawer(drawRoom);
  drawer(drawCross);
  drawer(drawCircles);
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
  ctx.strokeStyle = '#000' || '#e6e6e6';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineDashOffset = 20;

  callback(ctx);

  ctx.drawImage(
    canvasRef.value,
    0,
    0,
    canvasRef.value.width,
    canvasRef.value.height,
  );
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

function drawCircle(
  ctx: CanvasRenderingContext2D,
  xCoordinate: number,
  yCoordinate: number,
  radius: number,
  startAngle: number = 0,
  endAngle: number = 2 * Math.PI,
): void {
  ctx.beginPath();
  ctx.arc(
    xCoordinate,
    yCoordinate,
    radius,
    startAngle,
    endAngle,
  );
  ctx.stroke();
}

function drawCross(ctx: CanvasRenderingContext2D): void {
  const yCoordinate: number = ctx.canvas.height;

  drawLine(
    ctx,
    {
      xCoordinate: ctx.canvas.width / 2,
      yCoordinate: 0,
    },
    {
      xCoordinate: ctx.canvas.width / 2,
      yCoordinate,
    },
  );

  drawLine(
    ctx,
    {
      xCoordinate: 0,
      yCoordinate: ctx.canvas.height / 2,
    },
    {
      xCoordinate: ctx.canvas.width,
      yCoordinate: ctx.canvas.height / 2,
    },
  );
}

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

function drawCircles(ctx: CanvasRenderingContext2D): void {
  const canvasWidth: number = ctx.canvas.width;
  const canvasHeight: number = ctx.canvas.height;
  const canvasWidthHalf: number = canvasWidth / 2;
  const canvasHeightHalf: number = canvasHeight / 2;
  const canvasWidthQuarter: number = canvasWidthHalf / 2;
  const canvasHeightQuarter: number = canvasHeightHalf / 2;

  drawCircle(
    ctx,
    canvasWidthQuarter,
    canvasHeightQuarter,
    canvasWidthHalf,
  );

  drawCircle(
    ctx,
    canvasWidthQuarter + canvasWidthHalf,
    canvasHeightQuarter,
    canvasWidthHalf,
  );

  drawCircle(
    ctx,
    canvasWidthQuarter,
    canvasHeightQuarter + canvasHeightHalf,
    canvasWidthHalf,
  );

  drawCircle(
    ctx,
    canvasWidthQuarter + canvasWidthHalf,
    canvasHeightQuarter + canvasHeightHalf,
    canvasWidthHalf,
  );

  drawCircle(
    ctx,
    0,
    0,
    canvasWidthHalf,
  );

  drawCircle(
    ctx,
    canvasWidth,
    0,
    canvasWidthHalf,
  );

  drawCircle(
    ctx,
    0,
    canvasHeight,
    canvasWidthHalf,
  );

  drawCircle(
    ctx,
    canvasWidth,
    canvasHeight,
    canvasWidthHalf,
  );

  drawCircle(
    ctx,
    0,
    canvasHeightHalf,
    canvasHeight,
  );

  drawCircle(
    ctx,
    canvasWidth,
    canvasHeightHalf,
    canvasHeight,
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
$offset: 0rem;

.app-background {
  width: 100%;
  height: calc(100% - ($offset * 2));
  position: absolute;
  top: $offset;
  left: 0;
  right: 0;
  bottom: $offset;
  z-index: -1;
}
</style>
