<script setup>
import { useProfile } from '../../hooks/useProfile'
const { name, secondName,bayerId } = useProfile()
</script>


<template>
  <div class="profile">
    <div class="profile-logo">
      <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" fill="none">
        <metadata>
          <rdf:RDF>
            <cc:Work>
              <dc:format>image/svg+xml</dc:format>
              <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
              <dc:title>Avataaars</dc:title>
              <dc:creator>
                <cc:Agent>
                  <dc:title>Pablo Stanley</dc:title>
                </cc:Agent>
              </dc:creator>
              <dc:source>https://avataaars.com/</dc:source>
              <cc:license rdf:resource="https://avataaars.com/" />
              <dc:contributor>
                <cc:Agent>
                  <dc:title>Florian Körner</dc:title>
                </cc:Agent>
              </dc:contributor>
            </cc:Work>
          </rdf:RDF>
        </metadata>
        <mask id="avatarsRadiusMask">
          <rect width="280" height="280" rx="0" ry="0" x="0" y="0" fill="#fff" />
        </mask>
        <g mask="url(#avatarsRadiusMask)">
          <g transform="translate(40, 36)">
            <path
              d="M100 0C69.072 0 44 25.072 44 56v6.166c-5.675.952-10 5.888-10 11.834v14c0 6.052 4.48 11.058 10.305 11.881 2.067 19.806 14.458 36.541 31.695 44.73V163h-4c-39.764 0-72 32.236-72 72v9h200v-9c0-39.764-32.236-72-72-72h-4v-18.389c17.237-8.189 29.628-24.924 31.695-44.73C161.52 99.058 166 94.052 166 88V74c0-5.946-4.325-10.882-10-11.834V56c0-30.928-25.072-56-56-56z"
              fill="#EDB98A" />
            <path
              d="M76 144.611v8A55.79 55.79 0 00100 158a55.789 55.789 0 0024-5.389v-8A55.789 55.789 0 01100 150a55.79 55.79 0 01-24-5.389z"
              fill="#000" fill-opacity=".1" />
          </g>
          <g transform="translate(8, 170)">
            <path
              d="M92.68 29.936C58.295 35.366 32 65.138 32 101.052V110h200v-8.948c0-35.914-26.294-65.686-60.681-71.116a23.874 23.874 0 01-7.555 13.603l-29.085 26.229a4 4 0 01-5.358 0l-29.085-26.229a23.871 23.871 0 01-7.555-13.603z"
              fill="#B1E2FF" />
          </g>
          <g transform="translate(86, 134)">
            <rect x="42" y="18" width="24" height="6" rx="3" fill="#000" fill-opacity=".7" />
          </g>
          <g transform="translate(112, 122)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8c0 4.418 5.373 8 12 8s12-3.582 12-8" fill="#000"
              fill-opacity=".16" />
          </g>
          <g transform="translate(84, 90)">
            <path
              d="M26.998 16c-4.834 0-8.991 2.648-10.838 6.447-.54 1.111.387 1.853 1.277 1.125 2.437-1.993 5.82-3.228 9.56-3.228.082 0 .163 0 .244.002a6 6 0 1010.699 2.8 2 2 0 00-.125-.739 7.55 7.55 0 00-.144-.372 6.007 6.007 0 00-1.646-2.484C33.9 17.317 30.507 16 26.998 16zm58 0c-4.834 0-8.991 2.648-10.838 6.447-.54 1.111.387 1.853 1.278 1.125 2.436-1.993 5.82-3.228 9.56-3.228.08 0 .162 0 .243.002a6 6 0 1010.699 2.8 2 2 0 00-.125-.739 7.55 7.55 0 00-.144-.372 6.007 6.007 0 00-1.646-2.484C91.9 17.317 88.506 16 84.998 16z"
              fill="#000" fill-opacity=".6" />
          </g>
          <g transform="translate(84, 82)">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M26.547 6.148c-5.807.269-15.195 4.488-14.953 10.344.008.192.29.276.427.129 2.755-2.96 22.316-5.95 29.205-4.365.63.145 1.11-.477.71-.927-3.422-3.848-10.186-5.426-15.389-5.18zm59.906 0c5.807.269 15.195 4.488 14.953 10.344-.008.192-.29.276-.427.129-2.755-2.96-22.316-5.95-29.205-4.365-.63.145-1.11-.477-.71-.927 3.422-3.848 10.186-5.426 15.389-5.18z"
              fill="#000" fill-opacity=".6" />
          </g>
          <g transform="translate(7, 0)">
            <path
              d="M250 70.5c0 .8-.033 1.59-.097 2.374C256.882 82.449 261 94.244 261 107a57.867 57.867 0 01-3.667 20.341A28.6 28.6 0 01258 133.5c0 9.788-4.934 18.424-12.451 23.555C236.837 174.792 218.594 187 197.5 187a54.12 54.12 0 01-5.81-.312A36.355 36.355 0 01168.5 195c-4.018 0-7.884-.649-11.5-1.849v-12.54c17.531-8.328 30.048-25.496 31.791-45.744C194.569 134.002 199 129.019 199 123v-13c0-5.946-4.325-10.882-10-11.834V92c0-5.441-.776-10.702-2.224-15.676l1.377 12.87-11.34-24-45.136-19.523-30.114 10.557L80.065 76.42l-.045-2.609A55.927 55.927 0 0077 92v6.166c-5.675.952-10 5.888-10 11.834v13c0 6.019 4.43 11.002 10.209 11.867 1.743 20.248 14.26 37.416 31.791 45.744v10.944A36.36 36.36 0 0193.5 195a36.352 36.352 0 01-23.19-8.312 54.13 54.13 0 01-5.81.312c-21.094 0-39.337-12.208-48.049-29.945C8.934 151.924 4 143.288 4 133.5c0-2.115.23-4.175.667-6.159A57.872 57.872 0 011 107c0-12.756 4.118-24.55 11.097-34.126A28.892 28.892 0 0112 70.5c0-11.297 6.573-21.06 16.104-25.67 8.433-18.128 26.454-30.894 47.546-31.78A28.406 28.406 0 0195.5 5c2.327 0 4.589.279 6.754.805C111.776 2.058 122.148 0 133 0c10.346 0 20.255 1.87 29.408 5.292A28.728 28.728 0 01166.5 5a28.407 28.407 0 0119.85 8.05c21.092.886 39.113 13.652 47.546 31.78C243.427 49.44 250 59.203 250 70.5z"
              fill="#F59797" />
            <path
              d="M188.369 98.975a48.7 48.7 0 00.631-7.823C189 62.35 163.704 39 132.5 39S76 62.35 76 91.152c0 2.659.216 5.271.631 7.823 4.09-25.092 27.545-44.33 55.869-44.33 28.324 0 51.78 19.238 55.869 44.33z"
              fill="#92D9FF" />
          </g>
        </g>
      </svg>
    </div>
    <div class="profile-name">{{ name }} {{ secondName }} <span>{{bayerId}}</span></div>
    <div class="profile-more">
      <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  cursor: pointer;
  display: flex;
  max-height: 45px;
  column-gap: 15px;
  align-items: center;

  &-name {
    font-size: 1.2rem;
    color: #fff;
    span{
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.487);
    }
  }

  &-logo {
    width: 30px;
    height: 30px;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  &-more {
    svg {
      color: #fff;
    }
  }
}
</style>