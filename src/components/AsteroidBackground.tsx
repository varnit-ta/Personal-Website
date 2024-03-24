import React, { useEffect, useRef } from "react";

interface AsteroidBackgroundProps {
  canvasId: string;
}

const AsteroidBackground: React.FC<AsteroidBackgroundProps> = ({
  canvasId,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const renderAsteroidBackground = () => {
      let asteroidVelocityMultiplier = 0.3;
      let asteroidStrokeColor = "#e5e5e5";

      const canvas = canvasRef.current;
      if (!canvas) {
        console.error(`Canvas element with ID "${canvasId}" not found.`);
        return;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        console.error(
          "Failed to get 2D rendering context for the canvas element."
        );
        return;
      }

      var displayWidth = window.innerWidth;
      var displayHeight = window.innerHeight;
      var pixelDensity = window.devicePixelRatio;
      var width = displayWidth * pixelDensity;
      var height = displayHeight * pixelDensity;

      canvas.width = width * pixelDensity;
      canvas.height = height * pixelDensity;
      context.scale(pixelDensity, pixelDensity);

      const updateScreenSize = () => {
        displayWidth = window.innerWidth;
        displayHeight = window.innerHeight;
        width = displayWidth * pixelDensity;
        height = displayHeight * pixelDensity;

        canvas.width = width;
        canvas.height = height;
      }

      window.addEventListener("resize", updateScreenSize);

      interface Asteroid {
        x: number;
        y: number;
        radius: number;
        vx: number;
        vy: number;
        numEdges: number;
        edges: { x: number; y: number }[];
        isSmall: boolean;
      }

      const createAsteroid = (
        x: number,
        y: number,
        radius: number,
        vx: number,
        vy: number,
        isSmall = false
      ): Asteroid => {
        const numEdges = Math.floor(Math.random() * 9) + 8; // Random number of edges from 5 to 13

        const asteroid: Asteroid = {
          x,
          y,
          radius,
          vx,
          vy,
          numEdges,
          edges: [],
          isSmall, // Add a flag to track if the asteroid is small
        };

        for (let i = 0; i < numEdges; i++) {
          const angle = (i / numEdges) * 2 * Math.PI;
          const randomRadius = radius + (Math.random() - 0.5) * radius * 0.8; // Randomly displace edge within 80% of the radius
          const edgeX = Math.cos(angle) * randomRadius;
          const edgeY = Math.sin(angle) * randomRadius;
          asteroid.edges.push({ x: edgeX, y: edgeY });
        }

        return asteroid;
      };

      const drawAsteroid = (asteroid: Asteroid) => {
        context.beginPath();
        context.moveTo(
          asteroid.x + asteroid.edges[0].x,
          asteroid.y + asteroid.edges[0].y
        );
        context.strokeStyle = asteroidStrokeColor;
        context.lineWidth = 0.5;

        for (let i = 1; i < asteroid.numEdges; i++) {
          context.lineTo(
            asteroid.x + asteroid.edges[i].x,
            asteroid.y + asteroid.edges[i].y
          );
        }

        context.closePath();
        context.stroke();
      };

      const updateAsteroid = (asteroid: Asteroid) => {
        asteroid.x += asteroid.vx * asteroidVelocityMultiplier;
        asteroid.y += asteroid.vy * asteroidVelocityMultiplier;
      };

      const breakAsteroid = (asteroid: Asteroid): Asteroid[] => {
        const newAsteroids: Asteroid[] = [];

        for (let i = 0; i < 3; i++) {
          const radius = asteroid.radius / 3; // Half the radius of the original asteroid
          const x = asteroid.x;
          const y = asteroid.y;
          const vx = (Math.random() - 0.5) * 4 * asteroidVelocityMultiplier; // Random x velocity between -2 and 2
          const vy = (Math.random() - 0.5) * 4 * asteroidVelocityMultiplier; // Random y velocity between -2 and 2

          const newAsteroid = createAsteroid(x, y, radius, vx, vy, true); // Pass true to mark the asteroid as small
          newAsteroids.push(newAsteroid);
        }

        return newAsteroids;
      };

      const handleMouseMove = (event: MouseEvent) => {
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;
      };

      const initializeAsteroids = () => {
        const initialAsteroids: Asteroid[] = Array.from({ length: 5 }, () => {
          const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
          const radius = Math.random() * 80 + 40;
          let x, y, vx, vy;

          switch (side) {
            case 0: // Top
              x = Math.random() * width;
              y = -radius;
              vx = (Math.random() - 0.5) * 1;
              vy = Math.random() * 1;
              break;
            case 1: // Right
              x = width + radius;
              y = Math.random() * height;
              vx = -Math.random() * 1;
              vy = (Math.random() - 0.5) * 1;
              break;
            case 2: // Bottom
              x = Math.random() * width;
              y = height + radius;
              vx = (Math.random() - 0.5) * 1;
              vy = -Math.random() * 1;
              break;
            case 3: // Left
              x = -radius;
              y = Math.random() * height;
              vx = Math.random() * 1;
              vy = (Math.random() - 0.5) * 1;
              break;
            default:
              break;
          }

          return createAsteroid(x || 0, y || 0, radius || 0, vx || 0, vy || 0);
        });

        asteroids = initialAsteroids;
      };

      const manageAsteroidCount = () => {
        const asteroidCount = asteroids.length;
        const minAsteroids = 10;

        if (asteroidCount < minAsteroids) {
          const newAsteroids: Asteroid[] = Array.from(
            { length: minAsteroids - asteroidCount },
            () => {
              const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
              const radius = Math.random() * 80 + 40;
              let x, y, vx, vy;

              switch (side) {
                case 0: // Top
                  x = Math.random() * width;
                  y = -radius;
                  vx = (Math.random() - 0.5) * 1;
                  vy = Math.random() * 1;
                  break;
                case 1: // Right
                  x = width + radius;
                  y = Math.random() * height;
                  vx = -Math.random() * 1;
                  vy = (Math.random() - 0.5) * 1;
                  break;
                case 2: // Bottom
                  x = Math.random() * width;
                  y = height + radius;
                  vx = (Math.random() - 0.5) * 1;
                  vy = -Math.random() * 1;
                  break;
                case 3: // Left
                  x = -radius;
                  y = Math.random() * height;
                  vx = Math.random() * 1;
                  vy = (Math.random() - 0.5) * 1;
                  break;
                default:
                  break;
              }

              return createAsteroid(
                x || 0,
                y || 0,
                radius || 0,
                vx || 0,
                vy || 0
              );
            }
          );

          asteroids = [...asteroids, ...newAsteroids];
        }
      };

      const animationLoop = () => {
        requestAnimationFrame(animationLoop);
        context.clearRect(0, 0, width, height);

        manageAsteroidCount();

        asteroids = asteroids.flatMap((asteroid) => {
          updateAsteroid(asteroid);

          const dx = asteroid.x + asteroid.radius - mousePosition.x - 40;
          const dy = asteroid.y + asteroid.radius - mousePosition.y - 40;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const isOffScreen =
            asteroid.x < -asteroid.radius ||
            asteroid.x > width + asteroid.radius ||
            asteroid.y < -asteroid.radius ||
            asteroid.y > height + asteroid.radius;

          if (distance < asteroid.radius) {
            if (asteroid.radius < 20) {
              return [];
            }
            return breakAsteroid(asteroid);
          }

          if (isOffScreen) {
            return []; // Remove asteroid if it's off-screen
          } else {
            drawAsteroid(asteroid);
            return [asteroid];
          }
        });
      };

      let asteroids: Asteroid[] = [];
      const mousePosition = { x: 0, y: 0 };

      initializeAsteroids();
      animationLoop();

      window.addEventListener("mousemove", handleMouseMove);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    };

    renderAsteroidBackground();
  }, [canvasId]);

  return (
    <div style={{ position: "relative" }} className="asteroid-background">
      <canvas
        ref={canvasRef}
        id={canvasId}
        style={{
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      />
    </div>
  );
};

export default AsteroidBackground;
