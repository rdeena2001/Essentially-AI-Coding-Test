function decodePacket(packet) {
    const decodedStruct = {};
  
    // Decode the first short (2 bytes)
    decodedStruct.short1 = (packet[0] << 8) | packet[1];
    packet = packet.slice(2);
  
    // Decode the 12 characters (12 bytes)
    decodedStruct.chars1 = String.fromCharCode.apply(null, packet.slice(0, 12));
    packet = packet.slice(12);
  
    // Decode the single byte (1 byte)
    decodedStruct.byte1 = packet[0];
    packet = packet.slice(1);
  
    // Decode the 8 characters (8 bytes)
    decodedStruct.chars2 = String.fromCharCode.apply(null, packet.slice(0, 8));
    packet = packet.slice(8);
  
    // Decode the second short (2 bytes)
    decodedStruct.short2 = (packet[0] << 8) | packet[1];
    packet = packet.slice(2);
  
    // Decode the 15 characters (15 bytes)
    decodedStruct.chars3 = String.fromCharCode.apply(null, packet.slice(0, 15));
    packet = packet.slice(15);
  
    // Decode the long (4 bytes)
    decodedStruct.long1 =
      (packet[0] << 24) | (packet[1] << 16) | (packet[2] << 8) | packet[3];
  
    return decodedStruct;
  }
  
  // Sample packet data in hexadecimal
  const packetData = [
    0x04, 0xD2, 0x6B, 0x65, 0x65, 0x70, 0x64, 0x65, 0x63, 0x6F, 0x64, 0x69, 
    0x6E, 0x67, 0x38, 0x64, 0x6F, 0x6E, 0x74, 0x73, 0x74, 0x6F, 0x70, 0x03, 
    0x15, 0x63, 0x6F, 0x6E, 0x67, 0x72, 0x61, 0x74, 0x75, 0x6C, 0x61, 0x74, 
    0x69, 0x6F, 0x6E, 0x73, 0x07, 0x5B, 0xCD, 0x15,
  ];
  
  const decodedData = decodePacket(packetData);
  console.log(decodedData);
  