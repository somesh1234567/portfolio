"use client";

import { useFrame } from "@react-three/fiber";
import { Float, Text3D } from "@react-three/drei";
import { useRef } from "react";
// @ts-ignore
import { Group } from "three";

// Using simple geometry placeholders since we don't have actual 3D icon assets yet
// In a real project, we would load GLTF models here

function Icon({ position, color, label }: { position: [number, number, number], color: string, label: string }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <group position={position} ref={ref}>
                <mesh>
                    <octahedronGeometry args={[0.5]} />
                    <meshStandardMaterial color={color} wireframe />
                </mesh>
                {/* Simulating text label for the icon */}
            </group>
        </Float>
    );
}

export function FloatingIcons() {
    return (
        <group>
            <Icon position={[-4, 2, -2]} color="#00f3ff" label="Docker" />
            <Icon position={[4, 2, -3]} color="#bc13fe" label="K8s" />
            <Icon position={[-3, -2, -1]} color="#0aff00" label="AWS" />
            <Icon position={[3, -3, -2]} color="#ffffff" label="Git" />
        </group>
    );
}
